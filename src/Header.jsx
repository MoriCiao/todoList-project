import React, { createContext, useContext, useState } from "react";
import TodoList from "./TodoList";
import Timer from "./TimerTool";

// 要變更主題顏色的區域
const Header = (theme) => {
  return (
    <div className={`header-area`}>
      <div className="bg-img"></div>
      <Timer />
      <TodoList theme={theme} />
    </div>
  );
};

export default Header;
