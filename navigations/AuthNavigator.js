import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ResetPassword } from "../screens";
import { COLORS, ROUTES } from "../constants";
//import Login from "../screens/login";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      {/* <Login /> */}
      {/* <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD}
            component={ForgotPassword}
            options={({route}) => ({
              headerTintColor: COLORS.white,
              // headerBackTitle: 'Back',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              title: route.params.userId,
            })}
          /> */}
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.REST_PASSWORD} component={ResetPassword} />
      {/* <Stack.Screen
            name={ROUTES.HOME}
            component={DrawerNavigator}
            options={{headerShown: false}}
          /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
