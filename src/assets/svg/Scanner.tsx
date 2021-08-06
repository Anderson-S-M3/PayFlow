import React from "react";
import { View, StyleSheet } from "react-native";

import Svg, { Path } from "react-native-svg";
import { colors } from "../../styles/global";

export default function registerTicket() {
  return (
    <View style={styles.container}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"
          fill="white"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 53,
    height: 53,

    marginBottom: 8,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 5,

    backgroundColor: colors.brand.primary,
  },
});
