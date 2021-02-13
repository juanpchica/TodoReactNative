import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const GoalItems = (props) => {
  const item = props.item;
  return (
    <TouchableOpacity onPress={() => props.onDelete(item.key)} key={item.key}>
      <View style={styles.listITem}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
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
