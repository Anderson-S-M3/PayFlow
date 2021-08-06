import { useFonts } from "expo-font";

import {
  Lexend_400Regular,
  Lexend_600SemiBold,
} from "@expo-google-fonts/lexend";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export function fonts() {
  const [fontsLoaded] = useFonts({
    Lexend_600SemiBold,
    Lexend_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  return fontsLoaded;
}
