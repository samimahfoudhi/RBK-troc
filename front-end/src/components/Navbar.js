import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-items">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="center-items">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="button">Search</button>
        </div>
      </div>
      <div className="right-items">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
=======
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
>>>>>>> 8af99f6602df72ccccf95b231de9a6918223bc87
  );
};

export default Navbar;
