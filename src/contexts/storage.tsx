import React from "react";
import { createContext } from "react";

import { IDataBaseProps } from "../@Types/data";
import {
  DataBaseCREATE,
  DataBaseREAD,
  DataBaseUPDATE,
  DataBaseDELETE,
} from "../services/database";

interface IStorageContext {
  StorageCREATE(value: IDataBaseProps): void;
  DATA: [IDataBaseProps] | [];
  StorageUPDATE(id: string, pay: boolean): void;
  StorageDELETE(id: string): void;
}

const StorageContext = createContext<IStorageContext>({} as IStorageContext);

export const StorageProvider: React.FC = ({ children }) => {
  const [DATA, setDATA] = React.useState<[IDataBaseProps] | []>([]);
  const [Update, setUpdate] = React.useState<boolean>(true);

  React.useEffect(() => {
    DataBaseREAD().then((items) => setDATA(items));
  }, [Update]);

  async function StorageCREATE(value: IDataBaseProps) {
    await DataBaseCREATE(value);
    setUpdate(!Update);
  }

  async function StorageUPDATE(id: string, pay: boolean) {
    await DataBaseUPDATE(id, pay);
    setUpdate(!Update);
  }

  async function StorageDELETE(id: string) {
    await DataBaseDELETE(id);
    setUpdate(!Update);
  }

  return (
    <StorageContext.Provider
      value={{ StorageCREATE, DATA, StorageUPDATE, StorageDELETE }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export function useStorage() {
  const context = React.useContext(StorageContext);
  return context;
}
