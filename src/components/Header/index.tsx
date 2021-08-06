import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface IHeaderProps {
  title: string;
  count: string;
}

export default function Header({ title, count }: IHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}
