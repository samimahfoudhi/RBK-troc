// AddProduct.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./AddProduct.css";

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
      product.price = price;
    }
    if (currentSeller !== 0) {
      product.SellerId = currentSeller.id;
    }
    
    axios
      .put(`http://localhost:7000/updateProduct/${props.idUpdate}`, product)
      .then((response) => console.log("Update done"))
      .catch((err) => console.log(err));
    
    navigate("/product");
  };

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "your_cloudinary_preset"); // Replace with your Cloudinary preset name

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload",
        formData
      );

      setImage(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const handleSubmit = () => {
    const product = {
      image: image,
      category: category,
      description: descr,
      price: price,
      SellerId: currentSeller.id,
    };

    axios
      .post("http://localhost:7000/createProduct", product)
      .then((response) => console.log("Product created"))
      .catch((err) => console.log(err));

    navigate("/test");
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
