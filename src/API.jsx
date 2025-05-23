import React, { useEffect, useState } from "react";

const APItest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error("載入使用者失敗,", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>使用者清單</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.id}</p>
            <p>
              {user.name},{user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APItest;
