import React, { useState, useEffect } from "react";

const Brightness = () => {
  // 要有一個可以滑動的按鈕
  // 往上圖片變亮，往下則變暗
  const [top, setTop] = useState(50); // 初始位置
  const [isDragging, setIsDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newY = e.clientY - offsetY;
        setTop(newY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offsetY]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const buttonTop = e.currentTarget.getBoundingClientRect().top;
    setOffsetY(e.clientY - buttonTop);
  };

  return (
    <div className="brightness_area" style={{ position: "relative" }}>
      <button
        onMouseDown={handleMouseDown}
        style={{
          position: "absolute",
          left: "20px",
          top: `${top}px`,
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: isDragging ? "grabbing" : "grab",
          backgroundColor: "yellow",
          color: "white",
          border: "none",
          borderRadius: "5px",
          userSelect: "none",
        }}
      ></button>
    </div>
  );
};

export default Brightness;
