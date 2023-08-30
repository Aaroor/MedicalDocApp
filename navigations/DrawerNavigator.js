import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, ROUTES } from "../constants";
import { Wallet, Notifications } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";
import LeftNavigator from "./LeftNavigator";
import { StyleSheet, Platform, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  //const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.PROFILE}
        component={LeftNavigator}
        options={{
          title: "Profile",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="person-sharp" size={18} color={color} />
          ),
        }}
      />
      {/* 
      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: "Wallet",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="wallet" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.BOOK_MARKED}
        component={BottomTabNavigator}
        options={{
          title: "Book Marked",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
