/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";

export default function Form({ todos, setTodos }) {
  let [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className="formTodo" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            className="modernInput"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            placeholder="Enter todo item"
          />
          <button className="modernButton" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
