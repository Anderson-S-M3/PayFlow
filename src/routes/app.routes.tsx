import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";

import {
  RootScannerStackParamList,
  RootTabParamList,
} from "../@Types/navigation";

import HomeSvg from "../assets/svg/home.svg";
import Home from "../screens/Home";

import ExtractSvg from "../assets/svg/extract.svg";
import Extract from "../screens/Extract";

import ScannerSvg from "../assets/svg/Scanner";
import Scanner from "../screens/Scanner";

import Register from "../screens/Register";

import { colors } from "../styles/global";

export default function TabRoutes() {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  function ScannerStack() {
    const ScannerStack = createStackNavigator<RootScannerStackParamList>();

    return (
      <ScannerStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.brand.background },

          gestureEnabled: false,
        }}
        mode="modal"
        initialRouteName="Scanner"
      >
        <ScannerStack.Screen name="Scanner" component={Scanner} />
        <ScannerStack.Screen name="Register" component={Register} />
      </ScannerStack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      tabBar={(props) => {
        return (
          <LinearGradient
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
            colors={colors.brand.gradientW}
            start={[1, 1]}
            end={[1, 0]}
          >
            <BottomTabBar
              {...props}
              style={{
                backgroundColor: "transparent",

                elevation: 0,
                shadowOpacity: 0,

                borderTopWidth: 0,

                paddingTop: 30,
                height: 100,
              }}
            />
          </LinearGradient>
        );
      }}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.brand.primary,
        inactiveTintColor: colors.text.body,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: HomeSvg }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerStack}
        options={{ tabBarIcon: ScannerSvg, tabBarVisible: false }}
      />
      <Tab.Screen
        name="Extract"
        component={Extract}
        options={{ tabBarIcon: ExtractSvg }}
      />
    </Tab.Navigator>
  );
}
