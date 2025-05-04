import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [name, setName] = useState("訪客");
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((x) => x + 1);
      // console.log(timerRef.current);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  // Stop
  const StopTimer = () => {
    clearInterval(timerRef.current);
  };

  // Start
  const StartTimer = () => {
    timerRef.current = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
  };

  return (
    <div className="timer-area">
      <h1>Hi!{name}</h1>
      <p>已在目前頁面停留</p>
      <p>秒數：{count}</p>
      <button type="button" onClick={StopTimer}>
        Stop!
      </button>

      <button type="button" onClick={StartTimer}>
        Start!
      </button>
    </div>
  );
};

export default Timer;
