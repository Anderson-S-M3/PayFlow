import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    paddingRight: 60,

    borderBottomWidth: 1,
    borderBottomColor: colors.shapes.stroke,
  },

  icon: {
    width: 24,
    height: 24,

    color: colors.brand.primary,
  },

  line: {
    width: 1,
    height: "100%",

    marginHorizontal: 12,

    borderRightWidth: 1,
    borderRightColor: colors.shapes.stroke,
  },

  input: {
    minWidth: "70%",
    padding: 12,

    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 15,

    color: colors.text.body,
  },
});

export default styles;
