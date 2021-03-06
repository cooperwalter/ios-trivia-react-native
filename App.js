import { Platform, StyleSheet, UIManager } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import NativeTachyons from "react-native-style-tachyons";
import * as R from "ramda";
import { colors } from "./src/theme";
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic,
} from "@expo-google-fonts/playfair-display";
import AppLoading from "expo-app-loading";
import { connectToDevTools } from "react-devtools-core";
import _ from "lodash";
import store from "./src/store";
import AppNavigator from "./src/Nav";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const buildWidthStyles = () => {
  return _.range(0, 101).reduce(
    (styles, width) => ({ ...styles, [`w${width}p`]: { width: `${width}%` } }),
    {}
  );
};

const buildFlexStyles = () => {
  return _.range(0, 10, 0.5).reduce(
    (styles, flexAmount) => ({
      ...styles,
      [`flx${flexAmount}`]: { flex: flexAmount },
    }),
    {}
  );
};

const FONT_FAMILY = "PlayfairDisplay";
const buildFontFamilyStyles = () => {
  const typefaces = [
    "400Regular",
    "500Medium",
    "600SemiBold",
    "700Bold",
    "800ExtraBold",
    "900Black",
    "400Regular_Italic",
    "500Medium_Italic",
    "600SemiBold_Italic",
    "700Bold_Italic",
    "800ExtraBold_Italic",
    "900Black_Italic",
  ];
  return typefaces.reduce(
    (styles, typeface) => (
      {
        ...styles,
        // with weight number
        [`font${typeface}`]: { fontFamily: `${FONT_FAMILY}_${typeface}` },
        // without weight number, lowercased
        [`${R.pipe((string) => string.slice(3), R.toLower)(typeface)}`]: {
          fontFamily: `${FONT_FAMILY}_${typeface}`,
        },
      },
      {}
    )
  );
};

NativeTachyons.build(
  {
    rem: 12,
    colors: {
      palette: {
        ...colors,
      },
    },
    customStyles: {
      ...buildWidthStyles(),
      ...buildFlexStyles(),
      ...buildFontFamilyStyles(),
      o_0: {
        opacity: 0,
      },
    },
  },
  StyleSheet
);

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
