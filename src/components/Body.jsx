import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { RESTAURANT_IMAGES, FALLBACK_IMG } from "../utils/constants";

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

export default Body;
