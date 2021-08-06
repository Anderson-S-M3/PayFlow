import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";

import { RootAuthStackParamList } from "../@Types/navigation";

import { colors } from "../styles/global";

export default function Routes() {
  const AuthStack = createStackNavigator<RootAuthStackParamList>();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.brand.background },

        gestureEnabled: false,
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}
