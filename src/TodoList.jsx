import React, { useState } from "react";

const TodoList = () => {
  // list body
  const [todos, setTodos] = useState([]);
  // 輸入值
  const [inputValue, setInputValue] = useState("");

  const HandleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 添加todo, 當按鈕被點擊後添加
  const HandleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  // 刪除鍵
  const HandleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoslist">
      <div className="input-area">
        <input
          type="text"
          placeholder="請輸入代辦事項..."
          value={inputValue}
          onChange={HandleInputChange}
        />
        <button onClick={HandleAddTodo}>新增</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li className="todoitem" key={todo.id}>
            <p>{todo.text}</p>
            <button
              type="button"
              onClick={() => {
                HandleDeleteTodo(todo.id);
              }}
            >
              Delete
            </button>
            <hr className="underline" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
