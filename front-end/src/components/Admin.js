import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import AdminManage from "./AdminManage";
const Admin = () => {
  const [global, setGlobal] = useState([]);

  console.log(global);

  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllSellers")
      .then(({ data }) => {
        setGlobal((prevGlobal) => {
          const newData = data.filter(
            (item) => !prevGlobal.some((prevItem) => prevItem.id === item.id)
          );
          return [...newData, ...prevGlobal];
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:7000/getAllUsers")
      .then(({ data }) => {
        setGlobal((prevGlobal) => {
          const newData = data.filter(
            (item) => !prevGlobal.some((prevItem) => prevItem.id === item.id)
          );
          return [...newData, ...prevGlobal];
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {global.map((e, i) => {
        return <AdminManage e={e} key={i} />;
      })}
    </div>
  );
};

export default Admin;
