import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const AllCases = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>AllCases!</Text>
    </View>
  );
};

export default AllCases;
