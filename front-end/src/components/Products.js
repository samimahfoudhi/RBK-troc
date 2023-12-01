import React from "react";
import SBar from "./SBar";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllProducts")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

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
