import React from "react";
import "./Footer.css";
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
      </div>
    </footer>
  );
};

export default Footer;
