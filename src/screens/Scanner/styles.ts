import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/global";

import { Dimensions } from "react-native";

const DimensionHeight = Dimensions.get("screen").height;
const DimensionWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  overlayHeading: {
    position: "absolute",
    right: 0,
    width: "30%",
    height: "100%",
    backgroundColor: colors.brand.overlay,
  },
  heading: {
    position: "absolute",
    justifyContent: "center",
    top: 17,
    bottom: 0,
    right: 17,
  },
  headingIconContainer: {
    transform: [{ rotate: "90deg" }],

    position: "absolute",
    top: 0,
    right: 0,
  },
  headingIcon: {
    color: colors.brand.background,
  },
  headingContent: {
    position: "absolute",
    top: "47%",
    right: -126,

    transform: [{ rotate: "90deg" }],
  },
  headingText: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 15,

    color: colors.brand.background,
  },

  lineScanner: {
    position: "absolute",
    right: "30%",
    width: "40%",
    height: "100%",
    backgroundColor: "transparent",
  },

  overlayFooter: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    height: "100%",
    width: "30%",

    backgroundColor: colors.brand.overlay,
  },
  footer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,

    width: 56,
    justifyContent: "center",

    backgroundColor: colors.brand.background,
  },
  footerContent: {
    position: "absolute",
    top: "45%",
    left: -56,
  },

  buttonContainer: {
    transform: [{ rotate: "90deg" }],

    position: "absolute",
    left: 0,

    justifyContent: "center",
    alignItems: "center",
    height: 56,
    backgroundColor: "transparent",
  },

  overlayError: {
    flex: 1,
    backgroundColor: colors.brand.overlay,
  },

  footerContentDouble: {
    position: "absolute",
    left: -DimensionWidth + 58,
    width: DimensionWidth + 300,
  },

  buttonContainerDouble: {
    borderTopColor: colors.shapes.stroke,
    borderTopWidth: 1,

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    transform: [{ rotate: "90deg" }],
  },

  footerTextContent: {
    paddingTop: 40,

    transform: [{ rotate: "90deg" }],

    position: "absolute",
    top: 0,
    bottom: 0,
    left: -DimensionHeight + 230,
    right: 0,

    alignItems: "center",

    width: DimensionHeight,
    backgroundColor: colors.brand.background,
  },

  textBold: {
    fontFamily: fonts.textInter700,
    fontWeight: "700",
    fontSize: 15,

    color: colors.text.heading,
  },

  textNormal: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 15,

    color: colors.text.heading,
  },

  button: {
    color: colors.text.heading,
  },
  buttonOrange: {
    color: colors.brand.primary,
  },

  errorContainer: {
    flex: 1,
    transform: [{ rotate: "90deg" }],
    justifyContent: "center",
    alignItems: "center",
  },

  errorText: {
    fontFamily: fonts.textInter700,
    fontWeight: "700",
    fontSize: 17,

    marginBottom: 15,

    color: colors.text.heading,
  },

  line: {
    width: 1,
    height: 56,

    backgroundColor: colors.shapes.stroke,
  },
});

export default styles;
