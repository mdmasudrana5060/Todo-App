/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import "./TodoList.css";

// eslint-disable-next-line no-unused-vars
export default function TodoList({ todos, setTodos }) {
  let sortedList = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className="list">
      {sortedList.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
