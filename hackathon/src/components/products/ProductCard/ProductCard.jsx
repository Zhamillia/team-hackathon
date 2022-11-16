import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      id="div-card"
      style={
        item.id % 2 === 0
          ? { backgroundColor: "gainsboro", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }>
      <h4 id="div-card-h4">{item.name}</h4>
      <img
        id="div-card-img"
        src={item.picture}
        alt="img"
        onClick={() => navigate(`/details/${item.id}`)}
      />
      <p id="div-card-p">{item.price} $</p>
    </div>
  );
};

export default ProductCard;
