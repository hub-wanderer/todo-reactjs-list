import { useState, useEffect } from "react";
import Todos from "./Todos";

export default function Task() {
  const [todos, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handleInputChange(e: any) {
    setTodoValue(e.target.value);
    if (todoValue === "") return;
  }

  const handleAddtodo = (e: any) => {
    e.preventDefault();

    setTodo((prevTodo): any => [...prevTodo, todoValue]);
    setTodoValue("");
  };

  function handleDelete(id: any) {
    setTimeout(() => {
      setTodo((prevTodo): any => prevTodo.filter((todo) => todo !== id));
    }, 3300);
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleAddtodo(e);
    }
  };

  return (
    <>
      <ul className="task-container">
        {todos.map((todo, index) => (
          <Todos
            onDelete={() => handleDelete(todo)}
            key={index}
            index={index}
            task_name={todo}
          ></Todos>
        ))}
      </ul>
      <form>
        <div className="input-container">
          <input
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            type="text"
            value={todoValue}
          />
          <label>Add todo</label>
          {/* <button onClick={handleAddtodo}>+</button> */}
        </div>
      </form>
    </>
  );
}
