import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigations/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
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
