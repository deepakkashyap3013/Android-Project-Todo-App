import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = (props) => {
  const { text, id, pressHandler } = props;
  // console.log(props);
  //   console.log(props);
  return (
    <TouchableOpacity onPress={() => pressHandler(id)}>
      <Text style={styles.item}>{text}</Text>
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
    textTransform: "capitalize",
  },
});

export default TodoItem;
