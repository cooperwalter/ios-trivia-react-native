import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import NativeTachyons from "react-native-style-tachyons";
import _ from "lodash";
import store from "./src/store";
import AppNavigator from "./src/Nav";
import StateLogger from "./src/StateLogger";

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

NativeTachyons.build(
  {
    colors: {
      palette: {
        near_white: "#fffdfc",
        white: "#ffffff",
      },
    },
    customStyles: {
      ...buildWidthStyles(),
      ...buildFlexStyles(),
      o_0: {
        opacity: 0,
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
