import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, IMGS, ROUTES } from "../constants";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bgPattern} style={{ height: 140 }}>
        <Image source={IMGS.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList
          {...props}
          activeBackgroundColor={COLORS.primary}
          inactiveTintColor={COLORS.white}
          inactiveBackgroundColor="transparent"
        />
        {/* <DrawerItem
          icon={({ focused, color, size }) => (
            <Icon name="wallet" size={18} color={color} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Wallet"
          onPress={() => props.navigation.navigate(ROUTES.WALLET)}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <Icon name="notifications" size={18} color={color} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Notifications"
          onPress={() => props.navigation.navigate(ROUTES.NOTIFICATIONS)}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <Icon name="person-outline" size={18} color={color} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="My Profile"
          onPress={() => props.navigation.navigate(ROUTES.PROFILE)}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <Icon name="exit-outline" size={18} color={color} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Logout"
          onPress={() => props.navigation.navigate(ROUTES.LOGIN)}
        /> */}
        <DrawerItem
          icon={({ focused, color, size }) => (
            <Icon name="exit-outline" size={18} color={color} />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Logout"
          onPress={() => props.navigation.navigate(ROUTES.LOGIN)}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: "absolute",
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
