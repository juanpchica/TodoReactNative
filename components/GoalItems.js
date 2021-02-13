import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const GoalItems = (props) => {
  const item = props.item;
  return (
    <View style={styles.listITem}>
      <Text>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listITem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});
