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

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoal = () => {
    setCourseGoals([
      ...courseGoals,
      { key: new Date().getDate().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listITem}>
        <Text>{item.value}</Text>
      </View>
    );
  };
  return (
    <View style={{ padding: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: "80%",
          }}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoal} />
      </View>

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
  listITem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});
