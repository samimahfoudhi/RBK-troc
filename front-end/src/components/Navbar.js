import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="logo">RBK-TROC</div>
        <button className="home">Home</button>

        <button
          className="collection"
          onClick={() => {
            navigate("/product");
          }}
        >
          Collection
        </button>
        <div className="searchcontainer">
          <div className="searchbackground" />

          <input
            className="searchinput"
            type="text"
            placeholder="Search Items"
          />
        </div>

        <button
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>

        <div className="aboutcontainer">
          <button
            className="about"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
