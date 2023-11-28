import * as React from "react";
import "./Product.css";
const Product = (props) => {
  return (
    <div className="card">
      <img src={props.e.image} alt="" />
      <div>
        <h5>{props.e.price}</h5>
        <p>{props.e.description}</p>
        <p>{props.e.category}</p>
      </div>

      <button>Buy Now</button>
    </div>
  );
};

export default Product;
