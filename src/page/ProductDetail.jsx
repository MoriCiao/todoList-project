import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <p>Current Path: {location.pathname}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ProductDetail;
