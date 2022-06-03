import React from "react";
import "./card.css";

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt="" />
      <div className="card__info">
        <p id="title">{product.title}</p>
        <p id="brand">
          by <strong>{product.brand}</strong>
        </p>
        <p id="category">Category : {product.category}</p>
        <p id="popularity">Popularity : {product.popularity}%</p>
        <p id="price">
          Price <strong>₹{product.price}</strong>
        </p>
      </div>
    </div>
  );
};

export default Card;
