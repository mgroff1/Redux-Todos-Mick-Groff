import React from "react";
import Footer from "./Footer";
import AddTodo from "./../containers/AddTodo";
import VisibleTodoList from "./../containers/VisibleTodos";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
