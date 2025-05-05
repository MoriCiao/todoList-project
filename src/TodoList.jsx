import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "預設代辦事項" },
  ]);
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
        checked: false,
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

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    console.log("Check !");
  };

  return (
    /*
<fieldset>
  <legend>Select a maintenance drone:</legend>

  <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Huey</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Dewey</label>
  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie">Louie</label>
  </div>
</fieldset>

*/

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
            <div className="li-sapce">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleCheck(todo.id)}
              />
              <p className={todo.checked ? "strikethrough" : ""}>{todo.text}</p>
              <span className={!todo.checked ? "no-awesome" : "awesome"}>
                💪
              </span>
              <button
                type="button"
                onClick={() => {
                  HandleDelete(todo.id, todo.text);
                }}
              >
                Delete
              </button>
              <br />
              <hr />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
