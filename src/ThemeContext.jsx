import React, { createContext, useState, useContext } from "react";
import "./test.css";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ 一個顯示主題的元件
const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <h1 className={`${theme === "light" ? "dark" : "light"}`}>
      現在是 {theme === "light" ? "☀️ Light" : "🌙 Dark"} 模式
    </h1>
  );
};

// 4️⃣ 一個切換主題的按鈕
const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>切換主題</button>;
};

// 5️⃣ App 包起來
const AppContext = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeDisplay />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default AppContext;
