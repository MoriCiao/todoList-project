import React, { useEffect, useState } from "react";

const Time2 = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [name, setName] = useState("旅客");
  const [input, setInput] = useState("");
  console.log(input);
  const changeName = () => {
    setName(input || "旅客2");
  };

  useEffect(() => {
    console.log("Hi" + name);
  }, [name]); // 第一次加載

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);
  return (
    <div>
      <p>{time}</p>
      <p>Hi , {name}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="輸入..."
      />

      <button onClick={changeName}>Add</button>
    </div>
  );
};

export default Time2;
