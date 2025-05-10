import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import "./test";
import Header from "./Header";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // 預設主題為 淺色
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    // 如果目前是 light 則為true 對應右側的 light
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  // 當theme改變時，body class 被修改
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
    // 利用主題變更，讓對應的物件做深淺主題轉換
    // 此為變更按鈕的深淺
    const changeBtn = document.querySelector(".theme-change");
    if (theme === "dark") {
      changeBtn.className = "theme-change";
      changeBtn.classList.add("btn-dark");
    } else {
      changeBtn.classList.remove("btn-dark");
    }

    const themeInput = document.querySelector(".todo-input");
    if (theme === "dark") {
      themeInput.classList.add("themeInput");
    } else {
      themeInput.classList.remove("themeInput");
    }
    const themeAddBtn = document.querySelector(".todo-AddBtn");
    if (theme === "dark") {
      themeAddBtn.classList.add("themeAddBtn");
    } else {
      themeAddBtn.classList.remove("themeAddBtn");
    }

    const themeDateInput = document.querySelector(".input-date") || null;
    if (theme === "dark") {
      themeDateInput.classList.add("themeDateInput");
    } else if (theme === "light") {
      themeDateInput.classList.remove("themeDateInput");
    } else {
      return;
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button type="button" className="theme-change" onClick={toggleTheme}>
      主題切換
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <Header />
    </ThemeProvider>
  );
};

export default App;
