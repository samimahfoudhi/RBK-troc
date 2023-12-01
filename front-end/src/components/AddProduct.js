import React from "react";
import "./AddProduct.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const AddProduct = (props) => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllSellers")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const currentSeller = data.find((e) => e.email === props.seller.email);
  console.log(currentSeller);
  const handleUpdate = () => {
    const prouct = {};
    if (image !== "") {
      prouct.image = image;
    }
    if (category !== "") {
      prouct.category = category;
    }
    if (descr !== "") {
      prouct.description = descr;
    }
    if (price !== 0) {
      prouct.image = image;
    }
    if (currentSeller !== 0) {
      prouct.SellerId = currentSeller.id;
    }
    axios
      .put(`http://localhost:7000/updateProduct/${props.idUpdate}`, prouct)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));
    navigate("/product");
  };
  const handleSubmit = () => {
    const prouct = {
      image: image,
      category: category,
      description: descr,
      price: price,
      SellerId: currentSeller.id,
    };

    axios
      .post("http://localhost:7000/createProduct", prouct)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));

    navigate("/test");
  };
  return (
    <div className="contain">
      <div className="formContainer">
        <form>
          <input
            type="text"
            placeholder="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="description product"
            onChange={(e) => {
              setDescr(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <br />
          <input
            type="number"
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </form>
        <button onClick={handleSubmit}>submit</button>
        <button onClick={handleUpdate}>submit update</button>
      </div>
    </div>
  );
};

export default AddProduct;
