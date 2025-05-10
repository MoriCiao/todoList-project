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

    const changeBtn = document.querySelector(".theme-change");
    if (changeBtn) {
      changeBtn.className = "theme-change";
      changeBtn.classList.add(theme);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 切換主題敘述
// const ThemeDisplay = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <h1 className={`${theme === "light" ? "dark" : "light"}`}>
//       現在是 {theme === "light" ? "☀️ Light" : "🌙 Dark"} 模式
//     </h1>
//   );
// };
// 製作切換按鈕
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
      {/* <ThemeDisplay /> */}
      <ThemeToggleButton />
      <Header />
    </ThemeProvider>
  );
};

export default App;
