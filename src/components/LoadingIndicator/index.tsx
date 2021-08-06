import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles, { loading } from "./styles";

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={loading} />
    </View>
  );
}
