import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="cardContainer">
      <img className="cardImage" src={props.e.image} alt="" />
      <div className="categoryText">{props.e.category}</div>
      <div className="titlePrice">
        <div className="titleText">{props.e.description}</div>
        <div className="priceText">{props.e.price} DT</div>
      </div>
      <button className="buyButton">
        <div className="buyButtonText">Buy Now</div>
      </button>
    </div>
  );
};

export default Card;
