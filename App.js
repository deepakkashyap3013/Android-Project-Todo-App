import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/addToDo";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    const Updated = todo.filter((item) => item.key !== key);
    console.log("clicked");
    setTodo(Updated);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <AddTodo setTodo={setTodo} currList={todo} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => {
              return (
                <TodoItem {...item} id={item.key} pressHandler={pressHandler} />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
