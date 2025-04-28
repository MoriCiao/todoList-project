import React, { useState, useEffect } from "react";
import Timer from "./timer";
const Counter = () => {
  // 預設count為 0
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 150);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div className="counter">
      {/* 每次h1 變更的時候，useEffect都會將css animate附加進className，時間到再將其移除
        add("animate") & remove("animate")的概念 */}
      <h1 className={`count ${animate ? "animate" : ""}`}>{count}</h1>
      <div>
        <p>Just a Counter</p>
        <button onClick={() => setCount(count + 1)}>
          <i
            className="fa-solid fa-plus"
            style={{ color: "rgb(15, 37, 64)" }}
          ></i>
        </button>
        <button onClick={() => setCount(count - 1)}>
          <i
            className="fa-solid fa-minus"
            style={{ color: "rgb(15, 37, 64)" }}
          ></i>
        </button>
      </div>
      <Timer />
    </div>
  );
};

export default Counter;
