import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const MyCases = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>MyCases!</Text>
    </View>
  );
};

export default MyCases;
