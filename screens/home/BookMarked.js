import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const BookMarked = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>BookMarked!</Text>
    </View>
  );
};

export default BookMarked;
