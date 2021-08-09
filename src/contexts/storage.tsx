import React from "react";
import { createContext } from "react";

import { IDatabaseProps } from "../@Types/data";
import {
  DatabaseCREATE,
  DatabaseREAD,
  DatabaseUPDATE,
  DatabaseDELETE,
} from "../services/database";

interface IStorageContext {
  StorageCREATE(value: IDatabaseProps): void;
  DATA: [IDatabaseProps] | [];
  StorageUPDATE(id: string, pay: boolean): void;
  StorageDELETE(id: string): void;
}

const StorageContext = createContext<IStorageContext>({} as IStorageContext);

export const StorageProvider: React.FC = ({ children }) => {
  const [DATA, setDATA] = React.useState<[IDatabaseProps] | []>([]);
  const [Update, setUpdate] = React.useState<boolean>(true);

  React.useEffect(() => {
    DatabaseREAD().then((items) => setDATA(items));
  }, [Update]);

  async function StorageCREATE(value: IDatabaseProps) {
    await DatabaseCREATE(value);
    setUpdate(!Update);
  }

  async function StorageUPDATE(id: string, pay: boolean) {
    await DatabaseUPDATE(id, pay);
    setUpdate(!Update);
  }

  async function StorageDELETE(id: string) {
    await DatabaseDELETE(id);
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
