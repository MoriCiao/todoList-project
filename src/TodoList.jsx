import React, { useEffect, useState, useRef } from "react";
import LocalStorageTodos from "./LocalStorageTodos";

// 特效
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  // 新增日期
  const now = new Date(Date.now());
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const days = ["日", "一", "二", "三", "四", "五", "六"];
  const day = days[now.getDay()];
  const timeNow = `${String(hour).padStart(2, "0")} : ${String(
    minutes
  ).padStart(2, "0")}`;

  // HTML 的 input
  const [inputValue, setInputValue] = useState("");

  // todolist
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "預設代辦事項",
      checked: false,
      date: timeNow,
    },
  ]);
  // ADD 按鈕連動 enter
  const btnRef = useRef(null);
  const focusRef = useRef(null);
  // 第一次加載頁面的時後，持續監聽
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (btnRef.current) {
          // 模擬按鈕被點擊
          btnRef.current.click();
        }
      }
    };
    focusRef.current.focus();

    document.addEventListener("keydown", handleKeyDown);
    // 清除監聽事件
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

    // console.log("目前表單裡有");
    // console.log(JSON.stringify(todos));
    // console.log(todos.length);
  };

  // Delete
  const [delMessage, setDelMessage] = useState("");

  const HandleDelete = (id, text) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);

    // console.log(`表單${id},內容${text}已刪除...`);
  };

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    console.log("Check !");
  };

  useEffect(() => {
    // 新增 todo 時將資料存儲在 localStorage
    localStorage.setItem("my-todos", JSON.stringify(todos));
    // console.log("New todo 已儲存 ");
  }, [todos]);

  return (
    <div className="todolist">
      <fieldset className="list-header">
        <legend>To DO List</legend>
        <div>
          <div className="input-area">
            <input
              type="text"
              placeholder="請輸入代辦事項..."
              value={inputValue}
              onChange={HandleInputValue}
              ref={focusRef}
              className="todo-input"
            />

            <button
              className="todo-AddBtn"
              type="button"
              ref={btnRef}
              onClick={HandleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </fieldset>
      <div className="list-body">
        <ul className="list-area">
          <AnimatePresence
            onExitComplete={() => {
              console.log("刪除動畫已完成!");
              setDelMessage("刪除動畫已完成!");
              setTimeout(() => {
                setDelMessage("");
              }, 1000);
            }}
          >
            {todos.map((todo) => (
              <motion.li
                className="todo-item"
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="li-bg"></div>
                <div className="li-sapce">
                  <p className="date-text">
                    {timeNow} ({day})
                  </p>
                  <div className="todo-thing">
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleCheck(todo.id)}
                    />
                    <p className={todo.checked ? "strikethrough" : ""}>
                      {todo.text}
                    </p>
                    <span className={!todo.checked ? "no-awesome" : "awesome"}>
                      💪
                    </span>
                  </div>

                  <div className="deadLine">
                    <label htmlFor="">DeadLine : </label>
                    <input type="date" className="input-date" />
                    <button
                      type="button"
                      onClick={() => {
                        HandleDelete(todo.id, todo.text);
                      }}
                    >
                      <img
                        src="/trash-solid.svg"
                        alt="trash"
                        className="trash"
                      />
                    </button>
                  </div>

                  <br />
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
