import React from "react";
import axios from "axios";
import "./ProfilInfo.css";
import { useNavigate } from "react-router";
const ProfilInfoAdmin = (props) => {
  const navigate = useNavigate();
  const handleUpdate = () => {
    props.importId(props.e.id);
    navigate("/test2");
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:7000/deleteProduct/${props.e.id}`)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="cardContaine">
        <img className="cardImag" src={props.e.image} alt="" />
        <div className="categoryTex">{props.e.category}</div>
        <div className="titlePric">
          <div className="titleTex">{props.e.description}</div>
          <div className="priceTex">{props.e.price}</div>
        </div>
        <button className="buyButto" onClick={handleUpdate}>
          <div className="buyButtonTex">update</div>
        </button>
        <button className="buyButto" onClick={handleDelete}>
          <div className="buyButtonTex">delete</div>
        </button>
      </div>
    </div>
  );
};

export default ProfilInfoAdmin;
