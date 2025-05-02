import React from "react";
import TodoList from "./TodoList";
import Timer from "./TimerTool";
const Header = () => {
  return (
    <div className="header-area">
      <div className="bg-img"></div>
      <Timer />
      <TodoList />
    </div>
  );
};

export default Header;
