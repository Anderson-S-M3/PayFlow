import React from "react";
import { View, ScrollView } from "react-native";

import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";

import { colors } from "../../styles/global";

interface IBackgroundRadial {
  height?: number | string;
  cy?: number | string;

  scroll?: boolean;

  children?: JSX.Element;
}

export default function BackgroundRadial({
  height,
  cy = "100%",
  scroll = false,
  children,
}: IBackgroundRadial) {
  return (
    <>
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Svg
            height={height}
            width="100%"
            style={{ position: "absolute", zIndex: -999 }}
          >
            <Defs>
              <RadialGradient
                id="radialGradient"
                cy={cy}
                cx="50%"
                rx="58.93%"
                ry="69.94%"
              >
                <Stop offset="0" stopColor={colors.brand.gradient.primary} />
                <Stop offset="1" stopColor={colors.brand.gradient.secundary} />
              </RadialGradient>
            </Defs>
            <Rect width="100%" height="100%" fill="url(#radialGradient)" />
          </Svg>
          {children}
        </ScrollView>
      ) : (
        <View>
          <Svg
            height={height}
            width="100%"
            style={{ position: "absolute", zIndex: -999 }}
          >
            <Defs>
              <RadialGradient
                id="radialGradient"
                cy={cy}
                cx="50%"
                rx="58.93%"
                ry="69.94%"
              >
                <Stop offset="0" stopColor={colors.brand.gradient.primary} />
                <Stop offset="1" stopColor={colors.brand.gradient.secundary} />
              </RadialGradient>
            </Defs>
            <Rect width="100%" height="100%" fill="url(#radialGradient)" />
          </Svg>
          {children}
        </View>
      )}
    </>
  );
}
