import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  console.log("loggedInUser:", loggedInUser);
  const isOnline = useOnlineStatus();

  //*Subscribing to the store using a Selector
  //* selecting just the number means Header re-renders only when the count changes
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

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
            {isOnline ? (
              <span className="online-status">Online 🟢</span>
            ) : (
              <span className="offline-status"> Offline 🔴</span>
            )}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="cart-link"
              aria-label={`Cart, ${totalQuantity} items`}
            >
              <span className="cart-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {totalQuantity > 0 && (
                  <span className="cart-badge">
                    {totalQuantity > 99 ? "99+" : totalQuantity}
                  </span>
                )}
              </span>
              Cart
            </Link>
          </li>
          <li> {loggedInUser} </li>
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
