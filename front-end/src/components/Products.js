import React from "react";
import SBar from "./SBar";
import Card from "./Card";
import data from "./Data";
import "./Products.css";

const Products = () => {
  return (
    <div className="prods">
      <SBar />
      <div className="cardGrid">
        {data.map((e, i) => {
          return <Card e={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Products;
