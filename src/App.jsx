import { useState } from "react";
import "./style/App.css";
import Counter from "./Counter";
import Timer from "./timer";
import TodoList from "./TodoList";
import Weather from "./weather";
function App() {
  return (
    <div className="container">
      <div className="tool-area">
        <TodoList />
      </div>
      <div className="tool-area">
        <Counter />
      </div>
      <div className="tool-area">
        <Weather />
      </div>

      <Timer />
    </div>
  );
}

export default App;
