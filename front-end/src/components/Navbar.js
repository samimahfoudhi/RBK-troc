import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">RBK-TROC</div>
        <button className="home">Home</button>

        <button className="collection">Personal Collection</button>
        <div className="searchcontainer">
          <div className="searchbackground" />

          <input
            className="searchinput"
            type="text"
            placeholder="Search Items"
          />
        </div>

        <button className="login">Login</button>

        <div className="aboutcontainer">
          <button className="about">About</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
