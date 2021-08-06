import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.textLexend400,
    fontWeight: "400",
    fontSize: 20,

    lineHeight: 25,

    textAlign: "center",

    color: colors.text.heading,
  },

  title: {
    fontFamily: fonts.textLexend600,
    fontWeight: "600",
    fontSize: 20,

    lineHeight: 25,

    textAlign: "center",

    color: colors.text.heading,
  },

  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",

    padding: 24,
  },

  delete: {
    borderTopWidth: 1,
    borderTopColor: colors.shapes.stroke,
  },
});

export default styles;
