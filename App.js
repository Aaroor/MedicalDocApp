import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigations/AuthNavigator";
import { LogBox } from "react-native";
import LeftNavigator from "./navigations/LeftNavigator";

export default function App() {
  LogBox.ignoreLogs([
    "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
  ]);

  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
      {/* <LeftNavigator /> */}
    </NavigationContainer>

    // <Login />
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
