import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "../contexts/auth";
import LoadingIndicator from "../components/LoadingIndicator";

export default function Router() {
  const { loading, signed } = useAuth();

  return loading ? (
    <LoadingIndicator />
  ) : (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
