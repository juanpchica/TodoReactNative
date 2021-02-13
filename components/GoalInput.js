import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export const GoalInput = ({ addGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
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
      <Button title="ADD" onPress={() => addGoal(enteredGoal)} />
    </View>
  );
};
