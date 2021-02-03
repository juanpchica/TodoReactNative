import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const data = [
  {
    id: 1,
    image: "person-1.jpg",
    name: "maria ferguson",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image: "person-2.jpg",
    name: "john doe",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image: "person-1.jpg",
    name: "peter smith",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
];

export default function App() {
  const [people, setPeople] = useState(data);
  const [value, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      {people.map((person) => {
        const { id, image, name, quote } = person;
        return (
          <View key={id}>
            <Text>
              {name} {value}
            </Text>
          </View>
        );
      })}

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        color="#841584"
        title="Add a New Person"
        onPress={() => setPeople([...people, { name: value }])}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
