import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../constants";
import { Home, Wallet, Notifications, Settings } from "../screens";
import Icon from "@expo/vector-icons/Ionicons";
import SettingsNavigator from "./SettingsNavigator";
import CustomTabBarButton from "../components/CustomTabBarButton";
import CustomTabBar from "../components/CustomTabBar";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      // tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.dark,
        // 8tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          headerShown: true,
          // tabBarButton: (props) => (
          //   // <CustomTabBarButton route="settings" {...props} />
          // ),
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
      />
      <Tab.Screen
        name={ROUTES.WALLET}
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          title: "Wallet",
          headerShown: true,
          // tabBarButton: (props) => (
          //   // <CustomTabBarButton route="settings" {...props} />
          // ),
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
        // options={{
        //   tabBarButton: (props) => <CustomTabBarButton {...props} />,
        // }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          title: "Notifications",
          headerShown: true,
          // tabBarButton: (props) => (
          //   // <CustomTabBarButton route="settings" {...props} />
          // ),
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
        // options={{
        //   // tabBarButton: (props) => <CustomTabBarButton {...props} />,
        // }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          title: "Settings",
          headerShown: true,
          // tabBarButton: (props) => (
          //   // <CustomTabBarButton route="settings" {...props} />
          // ),
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
      />
    </Tab.Navigator>

    // <Tab.Navigator
    //   initialRouteName="Feed"
    //   screenOptions={{
    //     tabBarActiveTintColor: "#e91e63",
    //   }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: "Home",
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Notifications"
    //     component={Notifications}
    //     options={{
    //       tabBarLabel: "Notifications",
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="bell" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Settings"
    //     component={SettingsNavigator}
    //     options={{
    //       tabBarLabel: "Settings",
    //       headerShown: true,
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="bee" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 5,
    right: 10,
    left: 10,
    height: 92,
  },
});
