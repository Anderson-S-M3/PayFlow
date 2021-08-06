import { StyleSheet } from "react-native";
import { colors } from "../../styles/global";

export const loading = colors.brand.primary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.brand.background,
  },
});

export default styles;
