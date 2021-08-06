import { StyleSheet } from "react-native";

import { colors } from "../../styles/global";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",

    backgroundColor: colors.brand.overlay,
  },

  container: {
    alignItems: "center",

    backgroundColor: colors.brand.background,
  },

  barContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.brand.background,
  },

  bar: {
    width: 43,
    height: 2,

    marginTop: 12,
    marginBottom: 24,

    backgroundColor: colors.text.inputs,
  },
});

export default styles;
