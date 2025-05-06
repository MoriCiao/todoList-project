import React, { useEffect, useState } from "react";

const LocalStorageTodos = () => {
  const [localTodos, setLocalTodos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("my-todos");
    if (saved) {
      setLocalTodos(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="getStorage-area">
      <pre>{JSON.stringify(localTodos, ["text", "checked"], 2)}</pre>
    </div>
  );
};

export default LocalStorageTodos;
