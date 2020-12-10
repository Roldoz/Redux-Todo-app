import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <ListTodo />
    </div>
  );
}

export default App
