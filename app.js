import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 * - Search Bar
 * - Restaurant List
 *  - Restaurant Card
 *
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        // Option 1 — Flame / Hot food vibe
        <img
          src="https://img.icons8.com/fluency/96/hamburger.png"
          alt="Namaste Foods"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop"
        alt="Restaurant"
      />
      <h3>Pizza Place</h3>
      <p>Delicious pizzas with fresh ingredients.</p>
      <p>Rating: 4.5</p>
      <p>30-45 mins</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants or dishes" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
