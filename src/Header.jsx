import React from "react";
import TodoList from "./TodoList";
import Timer from "./TimerTool";
import Second from "./Second";
import Example from "./Example";

const Header = () => {
  return (
    <div className="header-area">
      <div className="bg-img"></div>
      <Timer />
      <TodoList />
      {/* <Second /> */}
      <hr style={{ width: "100%" }} />
      {/* <Example /> */}
    </div>
  );
};

export default Header;
