import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // using icons from expo library

const TodoItem = (props) => {
  const { text, id, pressHandler } = props;
  return (
    <TouchableOpacity onPress={() => pressHandler(id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="coral" />
        <Text style={styles.textItem}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  textItem: {
    textTransform: "capitalize",
  },
});

export default TodoItem;
