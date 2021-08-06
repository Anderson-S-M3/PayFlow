import React from "react";
import { TextStyle } from "react-native";
import { StyleProp, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface IButtonMediumProps {
  onPress: () => void;
  color?: string;
  title: string;
  style?: StyleProp<TextStyle>;
}

export default function ButtonLarge({
  onPress,
  color,
  title,
  style,
}: IButtonMediumProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <Text style={[styles.title, { color: color }, style]}>{title}</Text>
    </TouchableOpacity>
  );
}
