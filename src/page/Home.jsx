import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
];
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
      <ul>
        {products.map((item) => (
          <li key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
            <br />
            <p>{item.name}</p>
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
