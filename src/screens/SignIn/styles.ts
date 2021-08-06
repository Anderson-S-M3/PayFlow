import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    margin: 40,
  },

  image: {
    width: 258,
    height: 373,
  },

  simboloIcon: {
    width: 72,
    height: 44,

    marginTop: 24,
  },

  title: {
    fontFamily: fonts.textLexend600,
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 40,

    textAlign: "center",

    color: colors.text.heading,

    marginTop: 24,
  },

  button: {
    alignItems: "center",

    flex: 1,

    marginTop: 40,

    backgroundColor: colors.shapes.boxes,
  },

  contentButton: {
    alignItems: "center",

    flexDirection: "row",

    borderWidth: 1,
    borderColor: colors.shapes.stroke,
    borderRadius: 5,
  },

  googleIcon: {
    width: 24,
    height: 24,

    margin: 16,
  },

  line: {
    width: 1,
    height: "100%",

    backgroundColor: "#e9e9eb",
  },

  text: {
    fontFamily: fonts.textInter400,
    fontWeight: "500",
    fontSize: 15,

    textAlign: "center",

    color: colors.text.body,
  },
});

export default styles;
