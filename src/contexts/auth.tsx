import React from "react";
import { createContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as auth from "../services/auth";

interface IAuthContext {
  loading: boolean;
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<object | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function loadStoraged() {
      const storagedUser = await AsyncStorage.getItem("@PayFlow:user");
      const storagedToken = await AsyncStorage.getItem("@PayFlow:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStoraged();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem("@PayFlow:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@PayFlow:token", response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ loading, signed: !!user, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  return context;
}
