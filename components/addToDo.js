import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const AddtoDo = ({ setTodo, currList }) => {
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem) {
      const newTodo = {
        text: newItem,
        key: new Date().getTime().toString(),
      };
      setTodo([newTodo, ...currList]);
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
