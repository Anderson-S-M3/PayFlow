import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",

    paddingVertical: 24,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderTopWidth: 0.5,
    borderTopColor: colors.shapes.stroke,
  },

  icon: {
    width: 18,
    height: 18,

    marginRight: 16,
  },

  title: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 15,
  },
});

export default styles;
