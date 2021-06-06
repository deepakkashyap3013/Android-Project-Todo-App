import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Keyboard,
} from "react-native";

const AddtoDo = ({ setTodo, currList }) => {
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.length > 2) {
      const newTodo = {
        text: newItem,
        key: new Date().getTime().toString(),
      };
      setTodo([newTodo, ...currList]);
      Keyboard.dismiss(); // dismissing the keyboard after the work is over
    } else {
      // this is how to add user Interaction
      Alert.alert("Opps!", "Todos should be atlease 3 char long", [
        {
          text: "Got it",
          onPress: () => console.log("alert Closed"),
        },
      ]);
    }
    setNewItem("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="E.g. Buy Milk"
        value={newItem}
        onChangeText={(val) => setNewItem(val)}
      />
      <Button title="Add Todo" color="coral" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#dddd",
  },
});

export default AddtoDo;
