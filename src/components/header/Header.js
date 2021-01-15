import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-nav">
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/form">
          <li>Form</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
