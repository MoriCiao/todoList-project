import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date">
      <p>{time}</p>
    </div>
  );
};

export default Timer;
