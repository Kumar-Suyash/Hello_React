import React from "react";

const Header = () => {
  const [btnName, setBtnName] = React.useState("Login");
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>🛒 Cart</li>
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
