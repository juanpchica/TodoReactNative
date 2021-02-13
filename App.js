import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItems } from "./components/GoalItems";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoal = (goal) => {
    setCourseGoals([
      ...courseGoals,
      { key: new Date().getDate().toString(), value: goal },
    ]);
  };

  const renderItem = ({ item }) => {
    return <GoalItems item={item} />;
  };
  return (
    <View style={{ padding: 30 }}>
      <GoalInput addGoal={addGoal} />
      <FlatList data={courseGoals} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
