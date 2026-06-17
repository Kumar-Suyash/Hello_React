import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 *  - Search Bar
 *  - Restaurant List  ← config-driven from resList via .map()
 *    - RestaurantCard ← receives restaurant.info as prop
 *
 * Footer
 *  - Copyright
 *  - Links
 */

// ─── Dummy image map — one unique image per restaurant ID ────────────────────
const RESTAURANT_IMAGES = {
  123456:
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop", // Pizza Paradise
  234567:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop", // Burger Hub
  345678:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop", // Green Bites
  456789:
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=250&fit=crop", // Spice Kingdom
  567890:
    "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=250&fit=crop", // Chinese Dragon
  678901:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=250&fit=crop", // Dessert Delight
  789012:
    "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=250&fit=crop", // Sushi Station
  890123:
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=250&fit=crop", // South Spice
};

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop";

// ─── resList — single source of truth, mirrors GET /listRestaurants ──────────
const resList = [
  {
    info: {
      id: "123456",
      name: "Pizza Paradise",
      cloudinaryImageId: "rng/md/carousel/production/pizza123",
      locality: "MG Road",
      areaName: "Central District",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "10K+ ratings",
      veg: false,
      sla: { deliveryTime: 30, lastMileTravel: 3.5, slaString: "30 mins" },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
    },
  },
  {
    info: {
      id: "234567",
      name: "Burger Hub",
      cloudinaryImageId: "rng/md/carousel/production/burger234",
      locality: "Brigade Road",
      areaName: "Downtown",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.1,
      avgRatingString: "4.1",
      totalRatingsString: "8K+ ratings",
      veg: false,
      sla: { deliveryTime: 25, lastMileTravel: 2.1, slaString: "25 mins" },
      aggregatedDiscountInfoV3: { header: "40% OFF", subHeader: "UPTO ₹80" },
    },
  },
  {
    info: {
      id: "345678",
      name: "Green Bites",
      cloudinaryImageId: "rng/md/carousel/production/green345",
      locality: "Koramangala",
      areaName: "South Bangalore",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy", "Salads", "Vegan"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "5K+ ratings",
      veg: true,
      sla: { deliveryTime: 35, lastMileTravel: 4.2, slaString: "35 mins" },
      aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "UPTO ₹60" },
    },
  },
  {
    info: {
      id: "456789",
      name: "Spice Kingdom",
      cloudinaryImageId: "rng/md/carousel/production/spice456",
      locality: "Indiranagar",
      areaName: "East Bangalore",
      costForTwo: "₹500 for two",
      cuisines: ["Indian", "Biryani", "Kebabs"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRatingsString: "20K+ ratings",
      veg: false,
      sla: { deliveryTime: 45, lastMileTravel: 5.0, slaString: "45 mins" },
      aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹120" },
    },
  },
  {
    info: {
      id: "567890",
      name: "Chinese Dragon",
      cloudinaryImageId: "rng/md/carousel/production/chinese567",
      locality: "Whitefield",
      areaName: "East Bangalore",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Asian", "Noodles"],
      avgRating: 4.0,
      avgRatingString: "4.0",
      totalRatingsString: "6K+ ratings",
      veg: false,
      sla: { deliveryTime: 40, lastMileTravel: 6.3, slaString: "40 mins" },
      aggregatedDiscountInfoV3: {
        header: "FLAT ₹100 OFF",
        subHeader: "ON ORDERS ABOVE ₹299",
      },
    },
  },
  {
    info: {
      id: "678901",
      name: "Dessert Delight",
      cloudinaryImageId: "rng/md/carousel/production/dessert678",
      locality: "HSR Layout",
      areaName: "South Bangalore",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Cakes"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRatingsString: "12K+ ratings",
      veg: true,
      sla: { deliveryTime: 20, lastMileTravel: 1.8, slaString: "20 mins" },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹150" },
    },
  },
  {
    info: {
      id: "789012",
      name: "Sushi Station",
      cloudinaryImageId: "rng/md/carousel/production/sushi789",
      locality: "UB City",
      areaName: "Central Bangalore",
      costForTwo: "₹800 for two",
      cuisines: ["Japanese", "Sushi", "Asian"],
      avgRating: 4.8,
      avgRatingString: "4.8",
      totalRatingsString: "4K+ ratings",
      veg: false,
      sla: { deliveryTime: 50, lastMileTravel: 7.1, slaString: "50 mins" },
      aggregatedDiscountInfoV3: { header: "10% OFF", subHeader: "UPTO ₹200" },
    },
  },
  {
    info: {
      id: "890123",
      name: "South Spice",
      cloudinaryImageId: "rng/md/carousel/production/south890",
      locality: "Jayanagar",
      areaName: "South Bangalore",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Dosa", "Idli"],
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRatingsString: "15K+ ratings",
      veg: true,
      sla: { deliveryTime: 30, lastMileTravel: 2.9, slaString: "30 mins" },
      aggregatedDiscountInfoV3: {
        header: "FLAT ₹75 OFF",
        subHeader: "ON ORDERS ABOVE ₹199",
      },
    },
  },
];

// ─── Header ───────────────────────────────────────────────────────────────────
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

// ─── RestaurantCard — receives the full info object as a prop ─────────────────
const RestaurantCard = ({ resData }) => {
  // Destructure everything needed directly from resData
  const {
    id,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
    locality,
    areaName,
    veg,
    aggregatedDiscountInfoV3,
  } = resData;

  const imgSrc = RESTAURANT_IMAGES[id] ?? FALLBACK_IMG;

  return (
    <div className="restaurant-card">
      {/* Discount badge — only renders if the data exists */}
      {aggregatedDiscountInfoV3 && (
        <div className="discount-badge">
          <span className="discount-header">
            {aggregatedDiscountInfoV3.header}
          </span>
          <span className="discount-sub">
            {aggregatedDiscountInfoV3.subHeader}
          </span>
        </div>
      )}

      <div className="card-img-wrapper">
        <img src={imgSrc} alt={name} className="card-img" />
        {veg && <span className="veg-badge">🟢 Pure Veg</span>}
      </div>

      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-cuisines">{cuisines.join(", ")}</p>

        <div className="card-meta">
          <span className="card-rating">⭐ {avgRatingString}</span>
          <span className="card-dot">·</span>
          <span className="card-time">{sla.slaString}</span>
          <span className="card-dot">·</span>
          <span className="card-cost">{costForTwo}</span>
        </div>

        <p className="card-location">
          📍 {locality}, {areaName}
        </p>
      </div>
    </div>
  );
};

// ─── Body — loops over resList with .map(), passes each info as resData prop ──
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants or dishes" />
        <button>Search</button>
      </div>

      <div className="restaurant-list">
        {resList.map((restaurant) => (
          // key must be unique — using the API's own id field
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

// ─── AppLayout ────────────────────────────────────────────────────────────────
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
