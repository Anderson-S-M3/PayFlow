import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface IButtonMediumProps {
  onPress: () => void;
  title: string;
  color: string;
  backgroundColor: string;
  borderColor?: string;
}

export default function ButtonMedium({
  onPress,
  title,
  color,
  backgroundColor,
  borderColor = backgroundColor,
}: IButtonMediumProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[
        styles.container,
        { borderColor: borderColor, backgroundColor: backgroundColor },
      ]}
    >
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}
