import React from "react";
import SBar from "./SBar";
import Card from "./Card";

import "./Products.css";

const Products = (props) => {
  return (
    <div className="prods">
      <SBar />
      <div className="cardGrid">
        {props.data.map((e, i) => {
          return <Card e={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Products;
