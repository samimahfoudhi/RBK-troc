import React from "react";
import axios from "axios";
import "./Admin.css";
const AdminManage = (props) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:7000/deleteSeller/${props.e.id}`)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));
    axios
      .delete(`http://localhost:7000/deleteUser/${props.e.id}`)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <p id="adminmail">{props.e.email}</p>

      <button className="deleteButton" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default AdminManage;
