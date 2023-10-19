import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  let [todos, setTodos] = useState([]);
  const totalTodos = todos.length;

  const completedTodos = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </div>
  );
}
