import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store";
import AppNavigator from "./src/Nav";
import StateLogger from "./src/StateLogger";

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
