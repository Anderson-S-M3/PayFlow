import { StyleSheet } from "react-native";
import { fonts } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,

    paddingVertical: 20,
  },

  title: {
    fontFamily: fonts.textInter400,
    fontWeight: "400",
    fontSize: 15,
  },
});

export default styles;
