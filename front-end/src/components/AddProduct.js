
import React, { useState, useEffect, useRef } from "react";
import "./AddProduct.css";
import axios from "axios";
import { useNavigate } from "react-router";



const AddProduct = (props) => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState();
  const [data, setData] = useState([]);

  const currentSellerRef = useRef(null);


  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllSellers")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    currentSellerRef.current = data.find((e) => e.email === props.seller.email);
  }, [data, props.seller.email]);
n

  const handleUpdate = () => {
    const product = {};
    if (image !== "") {
      product.image = image;
    }
    if (category !== "") {
      product.category = category;
    }
    if (descr !== "") {
      product.description = descr;
    }
    if (price !== 0) {

      prouct.price = price;
    }
    if (currentSellerRef.current) {
      prouct.SellerId = currentSellerRef.current.id;
    }


    axios
      .put(`http://localhost:7000/updateProduct/${props.idUpdate}`, product)
      .then((response) => console.log("Update done"))
      .catch((err) => console.log(err));
    
    navigate("/product");
  };


  


  const handleSubmit = () => {
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
      prouct.price = price;
    }
    if (currentSellerRef.current) {
      prouct.SellerId = currentSellerRef.current.id;
    }
    console.log(prouct);
    axios
      .post("http://localhost:7000/createProduct", product)
      .then((response) => console.log("Product created"))
      .catch((err) => console.log(err));

    navigate("/product");
  };

  return (
    <div className="contain">
      <div className="formContainer">
        <form>
          <input
            type="file"
            onChange={handleImageUpload}
          />
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
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpdate}>Submit Update</button>
      </div>
    </div>
  );
};

export default AddProduct;
