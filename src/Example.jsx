import React, { useEffect, useState } from "react";

function Example() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const handleSearchUser = () => {
    const id = parseInt(inputValue, 10);
    if (!isNaN(id) && 10 > id > 0) {
      setCurrentUserId(id);
    } else {
      alert("請輸入有效的 ID (ID需大於 0 小於 10)");
    }
  };
  const handleInputUser = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <div>
      <h2>使用者資料查詢範例</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputUser}
        placeholder="請輸入ID數值..."
      />
      <button onClick={handleSearchUser}>Search User</button>
      <UserProfile userId={currentUserId} />
    </div>
  );
}

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const FetchData = async () => {
      // 載入狀態設為 true，讓畫面可以顯示 loading 中
      setLoading(true);

      try {
        // 顯示目前正在請求哪個使用者資料（用 userId 動態顯示）
        console.log(`User : No.${userId} 正在 Fetch Data...`);
        // 🔸開始時間
        const startTime = performance.now();

        // 使用 fetch 從 JSONPlaceholder API 抓取單一使用者資料
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        // ⚠️ 這行會出錯：因為 res.json() 是 Promise，而且它的資料只能「解析一次」
        // 第一次呼叫就已經把 response body 消耗掉了
        // console.log(res.json()); // ❌ 不應該這樣寫，會導致錯誤

        // 正確方式是：只呼叫一次 res.json() 並用 await 取得資料
        const data = await res.json(); // ✅ 將回傳的 JSON 結果解析出來

        // 印出解析後的資料，方便除錯（例如：使用者名字、email 等）
        // 🔸結束時間
        const endTime = performance.now();
        // 🔸顯示耗時（毫秒），並取小數點兩位
        const duration = (endTime - startTime).toFixed(2);
        console.log(`✅ Fetch 完成，用時 ${duration} ms`);

        console.log(data);

        // 確保組件還是掛載狀態，才安全地設定狀態（避免 memory leak）
        if (isMounted) {
          setUserData(data);
        }
      } catch (error) {
        // 若 fetch 出現錯誤（例如網路錯誤），印出錯誤訊息
        console.log(error);

        // 若元件仍掛載，則設定資料為 null
        if (isMounted) {
          setUserData(null);
        }
      } finally {
        // 最後不論成功或錯誤，都關掉 loading 狀態（畫面會更新）
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    console.log("最後一個");
    FetchData();

    return () => {
      isMounted = false;
      console.log(`Cleanup for user: ${userId}`);
    };
  }, [userId]);

  if (loading) {
    return <p>loading user data ... </p>;
  }

  if (!userData) {
    return <p>No user data available !</p>;
  }

  return (
    <div>
      <h3>User Profile</h3>
      <p>ID : {userData.id}</p>
      <p>Name : {userData.name}</p>
      <p>UserName: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>
        Address: {userData.address.street} {userData.address.city}
      </p>
      <p></p>
      <p></p>
    </div>
  );
};

export default Example;
