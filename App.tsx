import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider } from "./src/contexts/auth";
import { StorageProvider } from "./src/contexts/storage";

import { fonts } from "./src/fonts";
import AppLoading from "expo-app-loading";

import Routes from "./src/routes";

import { colors } from "./src/styles/global";

export default function App() {
  if (!fonts()) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.brand.primary}
        />
        <AuthProvider>
          <StorageProvider>
            <Routes />
          </StorageProvider>
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
