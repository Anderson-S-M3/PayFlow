import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },

  iconContainer: {
    marginBottom: 30,
  },

  icon: {
    color: colors.text.inputs,
  },

  title: {
    textAlign: "center",
    fontFamily: fonts.textLexend600,
    fontWeight: "600",
    fontSize: 20,

    marginBottom: 36,
  },

  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.shapes.stroke,

    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  buttonText: {
    paddingVertical: 20,
  },
  buttonTextOrange: {
    paddingVertical: 20,
    color: colors.brand.primary,
  },

  line: {
    height: "100%",
    width: 1,
    backgroundColor: colors.shapes.stroke,
  },
});

export default styles;
