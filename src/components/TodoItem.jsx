/* eslint-disable react/prop-types */

import "./TodoItem.css";
export default function TodoItem({ item, todos, setTodos }) {
  if (!item) {
    return null;
  }
  function handleComplete(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  const itemStyle = {
    textDecoration: item.done ? "line-through" : "none",
  };

  return (
    <div className="item">
      <div className="itemName">
        <span style={itemStyle} onClick={() => handleComplete(item.name)}>
          {item && item.name}
        </span>

        {item && (
          <span>
            <button onClick={() => handleDelete(item)} className="deleteButton">
              x
            </button>
            <hr className="line" />
          </span>
        )}
      </div>
    </div>
  );
}
