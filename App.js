import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItems } from "./components/GoalItems";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoal = (goal) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goal },
    ]);
  };

  const onDelete = (idItem) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== idItem);
    });
  };

  const renderItem = ({ item }) => {
    return <GoalItems item={item} onDelete={onDelete} />;
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
