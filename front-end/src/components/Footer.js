import React from "react";
import "./Footer.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-items">
        <Link to="https://www.facebook.com/" className="footer-link">
          Facebook
        </Link>
        <Link to="https://www.instagram.com/" className="footer-link">
          Instagram
        </Link>
      </div>
      <div className="center-items">&copy; 2023 RBK-TROC</div>
      <div className="right-items">
        <Link to="/contact" className="footer-link">
          Contact Us
        </Link>
=======

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h2>RBK-TROC</h2>
        <p>This is a description.</p>
      </div>
      <div className="section">
        <h3>List 1</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="section">
        <h3>List 2</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="section">
        <h3>List 3</h3>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
>>>>>>> 8af99f6602df72ccccf95b231de9a6918223bc87
      </div>
    </footer>
  );
};

export default Footer;
