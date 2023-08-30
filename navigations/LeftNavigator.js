import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ResetPassword, Profile } from "../screens";
import { COLORS, ROUTES } from "../constants";
//import Login from "../screens/login";
import DrawerNavigator from "./DrawerNavigator";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Platform, TouchableOpacity, Image } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

function LeftNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                size={30}
                color={COLORS.dark}
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          );
        },
      }}
      initialRouteName={ROUTES.HOME}
    >
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{ headerShown: true }}
      />
      {/* <Stack.Screen name={ROUTES.REST_PASSWORD} component={ResetPassword} /> */}
      {/* <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default LeftNavigator;
