import React from "react";
import "./Profil.css";
import ProfilInfo from "./ProfilInfo";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./Products.css";
const Profil = (props) => {
  const [data, setData] = useState([]);
  const [profilData, setProfilData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllSellers")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const currentSeller = data.find((e) => e.email === props.seller.email);

  useEffect(() => {
    if (currentSeller) {
      axios
        .get(`http://localhost:7000/getAllProductForOne/${currentSeller.id}`)
        .then(({ data }) => setProfilData(data))
        .catch((err) => console.log(err));
    } else {
      console.error("Current seller not found.");
    }
  }, [currentSeller]);

  return (
    <div className="profilContainer">
      <div>
        <img
          id="couverture"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div>
        <img
          id="profilphoto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmkq_M7TrkMDuRF682kID53FC5pfaHQJZuw&usqp=CAU"
          alt=""
        />
      </div>
      <button
        id="addproduct"
        onClick={() => {
          navigate("/test2");
        }}
      >
        add product
      </button>
      <div className="prods">
        <div className="profilInfoContaine"></div>;
        <div className="cardGrid">
          {profilData.map((elem, i) => {
            return (
              <ProfilInfo
                importId={props.importId}
                elem={elem}
                currentSeller={currentSeller}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profil;
