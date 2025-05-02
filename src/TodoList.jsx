import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const HandleInputValue = (e) => {
    console.log(`inputValue 輸入中... ， ${inputValue}`);
    setInputValue(e.target.value);
  };

  const HandleAdd = () => {
    // 把輸入值 + 入 todos 中
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(), // 唯一id
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      // 新增之後將input重置
      setInputValue("");
    }

    console.log("目前表單裡有" + todos);
  };

  // Delete
  const HandleDelete = (id, text) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    console.log(`表單${id},內容${text}已刪除...`);
  };

  return (
    <div className="todolist">
      <h1>To DO List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="請輸入代辦事項..."
          value={inputValue}
          onChange={HandleInputValue}
        />
        <button type="button" onClick={HandleAdd}>
          Add
        </button>
      </div>
      <ul className="list-area">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <p>{todo.text}</p>
            <button
              type="button"
              onClick={() => {
                HandleDelete(todo.id, todo.text);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
