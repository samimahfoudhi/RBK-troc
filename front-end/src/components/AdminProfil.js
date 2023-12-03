import React from "react";
import ProfilInfoAdmin from "./ProfilInfoAdmin";
import "./Profil.css";
import { useNavigate } from "react-router";
const AdminProfil = (props) => {
  const navigate = useNavigate();
  return (
    <div className="adminProfil">
      <h1>Admin profil</h1>

      <div className="cardGrid">
        {props.data.map((e, i) => {
          return <ProfilInfoAdmin e={e} key={i} importId={props.importId} />;
        })}
      </div>
      <button
        id="manage"
        onClick={() => {
          navigate("/test5");
        }}
      >
        manage profil
      </button>
    </div>
  );
};

export default AdminProfil;
