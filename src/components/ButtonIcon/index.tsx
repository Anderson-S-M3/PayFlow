import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { SvgProps } from "react-native-svg";
import { colors } from "../../styles/global";

import styles from "./styles";

interface IButtonIconProps {
  title: string;
  icon: React.FC<SvgProps>;
  color?: string;
  backgroundColor?: string;

  onPress?: () => void;
}

export default function ButtonIcon({
  title,
  icon: Icon,
  color = colors.actions.delete,
  backgroundColor = colors.brand.background,

  onPress,
}: IButtonIconProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Icon style={styles.icon} />
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}
