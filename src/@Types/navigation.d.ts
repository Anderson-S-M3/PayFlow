import { StackNavigationProp } from "@react-navigation/stack";

export type RootAuthStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

export type RootScannerStackParamList = {
  Scanner: undefined;
  Register: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Extract: undefined;
  Scanner: undefined;

  route: {
    params: {
      code: string;
    };
  };
};

export interface SignInStackProps {
  navigation: StackNavigationProp<RootAuthStackParamList, "SignIn">;
}

export interface HomeStackProps {
  navigation: StackNavigationProp<RootTabParamList, "Home">;
}

export interface RegisterStackProps {
  navigation: StackNavigationProp<
    RootScannerStackParamList,
    "Register",
    { code: string }
  >;
}

export interface ScannerStackProps {
  navigation: StackNavigationProp<RootTabParamList, "Scanner">;
}
