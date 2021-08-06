import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginBottom: 32,

    paddingHorizontal: 23,
  },

  titleDateContainer: {
    maxWidth: 180,
    paddingRight: 10,
  },

  title: {
    fontFamily: fonts.textLexend600,
    fontWeight: "600",
    fontSize: 17,

    color: colors.text.heading,

    marginBottom: 8,
  },

  textDate: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 13,

    color: colors.text.body,
  },

  date: {
    fontFamily: fonts.textInter500,
    fontWeight: "500",
    fontSize: 13,

    color: colors.text.body,
  },

  valueContainer: {},

  textValue: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 16,

    textAlign: "right",

    color: colors.text.heading,
  },

  value: {
    fontFamily: fonts.textInter600,
    fontWeight: "600",
    fontSize: 16,

    textAlign: "right",

    color: colors.text.heading,
  },
});

export default styles;
