import React from "react";
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
  );
};

export default Navbar;
