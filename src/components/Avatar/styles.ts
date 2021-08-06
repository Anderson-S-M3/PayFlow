import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  hi: {
    fontFamily: fonts.textLexend400,
    fontWeight: "400",
    fontSize: 20,

    color: colors.brand.background,
  },

  name: {
    fontFamily: fonts.textLexend600,
    fontWeight: "600",
    fontSize: 20,

    color: colors.brand.background,
  },

  description: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 13,

    color: colors.shapes.boxes,
  },

  imagem: {
    width: 48,
    height: 48,

    borderRadius: 5,
  },
});

export default styles;
