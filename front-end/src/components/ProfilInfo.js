import React from "react";
import "./ProfilInfo.css";
import axios from "axios";
import { useNavigate } from "react-router";
const ProfilInfo = (props) => {
  const navigate = useNavigate();
  const handleUpdate = () => {
    props.importId(props.elem.id);
    navigate("/test2");
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:7000/deleteProduct/${props.elem.id}`)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="cardContaine">
        <img className="cardImag" src={props.elem.image} alt="" />
        <div className="categoryTex">{props.elem.category}</div>
        <div className="titlePric">
          <div className="titleTex">{props.elem.description}</div>
          <div className="priceTex">{props.elem.price}</div>
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

export default ProfilInfo;
