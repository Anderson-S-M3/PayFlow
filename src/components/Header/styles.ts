import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 32,
    paddingBottom: 24,

    marginBottom: 32,

    borderBottomWidth: 1,
    borderBottomColor: colors.shapes.stroke,
  },

  title: {
    fontFamily: fonts.textLexend600,
    fontWeight: "600",
    fontSize: 20,

    color: colors.text.heading,
  },

  count: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 13,

    color: colors.text.body,
  },
});

export default styles;
