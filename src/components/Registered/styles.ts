import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",

    flexDirection: "row",

    padding: 20,
    paddingRight: 50,

    borderRadius: 5,

    backgroundColor: colors.brand.secundary,
  },

  simboloWSvg: {
    width: 56,
    height: 34,
  },

  line: {
    width: 1,
    height: "100%",

    backgroundColor: colors.brand.background,
  },

  text: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 13,

    lineHeight: 20,

    color: colors.brand.background,
  },

  numberTicket: {
    fontFamily: fonts.textInter700,
    fontWeight: "700",
    fontSize: 13,

    lineHeight: 20,

    color: colors.brand.background,
  },
});

export default styles;
