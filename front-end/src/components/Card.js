import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="cardContainer">
      <img
        className="cardImage"
        src="https://via.placeholder.com/246x278"
        alt=""
      />
      <div className="categoryText">Category</div>
      <div className="titlePrice">
        <div className="titleText">Title</div>
        <div className="priceText">Price DT</div>
      </div>
      <button className="buyButton">
        <div className="buyButtonText">Buy Now</div>
      </button>
    </div>
  );
};

export default Card;
