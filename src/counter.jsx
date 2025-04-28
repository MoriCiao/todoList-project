import React, { useState, useEffect } from "react";

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
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
