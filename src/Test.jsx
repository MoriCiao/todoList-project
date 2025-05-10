import React, { createContext, useContext } from "react";

// 建立 Context
// useContext 是個通道的概念
const ThemeContext = createContext();
const TextColor = createContext();
// 1️⃣ 用 props 傳遞的版本
const PropsChild = ({ theme }) => {
  return <p>[Props] 現在的主題是：{theme}</p>;
};

const PropsExample = ({ theme }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>Props 傳遞範例</h2>
      <PropsChild theme={theme} />
    </div>
  );
};

// ------------------------------------------------ //

// 2️⃣ 用 Context 傳遞的版本
const ContextChild = () => {
  // useContext 是個通道的概念
  const theme13 = useContext(ThemeContext);
  const color = useContext(TextColor);
  return (
    <div>
      <p>[Context] 現在的主題是：{theme13}</p>
      <p>[Color] is {color}</p>
    </div>
  );
};

const ContextExample = () => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}
    >
      <h2>Context 傳遞範例</h2>
      <ContextChild />
    </div>
  );
};

// 3️⃣ 主元件 App
const App = () => {
  const theme = "dark";
  const AppColor = "red";
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>Props vs Context 傳遞 🌗</h1>

      {/* Props 傳遞範例 */}
      <PropsExample theme={theme} />

      {/* Context 傳遞範例 */}
      <ThemeContext.Provider value={theme}>
        <TextColor.Provider value={AppColor}>
          <ContextExample />
        </TextColor.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
