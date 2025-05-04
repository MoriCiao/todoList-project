import React, { useEffect, useState } from "react";

const Second = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log(`Component mounted or updated`);

    const intervalId = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => {
      console.log(`Component will unmount`);
      clearInterval(intervalId);
    };
  }, []);

  return <div>經過時間：{second} 秒</div>;
};

export default Second;
