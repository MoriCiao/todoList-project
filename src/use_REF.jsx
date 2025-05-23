import React, { useRef, useEffect, useState } from "react";

function AutoFocusTextarea() {
  const textareaRef = useRef(null); // 建立一個 ref
  const [lastEdited, setLastEdited] = useState(null); // 儲存最後編輯時間

  useEffect(() => {
    // 頁面載入時自動 focus textarea
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleChange = () => {
    const now = new Date().toLocaleTimeString();
    setLastEdited(now);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 草稿輸入區</h2>
      <textarea
        ref={textareaRef}
        rows="6"
        cols="30"
        placeholder="請輸入內容..."
        onChange={handleChange}
      />
      <p>最後編輯時間：{lastEdited ? lastEdited : "尚未編輯"}</p>
    </div>
  );
}

export default AutoFocusTextarea;
