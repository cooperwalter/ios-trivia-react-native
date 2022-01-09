import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import NativeTachyons from "react-native-style-tachyons";
import store from "./src/store";
import AppNavigator from "./src/Nav";
import StateLogger from "./src/StateLogger";

NativeTachyons.build(
  {
    colors: {
      palette: {
        near_white: "#fffdfc",
        white: "#ffffff",
      },
    },
    customStyles: {
      w100p: {
        width: "100%",
      },
      flx1: {
        flex: 1,
      },
      flx2: {
        flex: 2,
      },
      flx3: {
        flex: 3,
      },
    },
  },
  StyleSheet
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
        {/* Hack to log redux store state to console b/c can't get debuggers to work */}
        {process.env.NODE_ENV === "development" ? <StateLogger /> : null}
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
