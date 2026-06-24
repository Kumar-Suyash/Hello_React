import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header rendered");

  //* if no dependency array => useEffect will be called on every render
  //* if dependency array is empty = [] => useEffect will be called only once after initial render(just once)
  //* if dependency array has some state variable [btnName] => useEffect will be called only when that state variable changes.

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://img.icons8.com/fluency/96/hamburger.png"
          alt="Namaste Foods"
        />
        <span className="logo-text">NamasteFoods</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>🛒 Cart </li>
          <button
            className="login-btn"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
