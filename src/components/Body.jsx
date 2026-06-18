import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { RESTAURANT_IMAGES, FALLBACK_IMG } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants or dishes" />
        <button>Search</button>
      </div>
      <div
        className="filter-btn"
        onClick={() => {
          const filteredlist = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.5,
          );
          setListOfRestaurants(filteredlist);
        }}
      >
        <button>Top Rated Resturants</button>
      </div>

      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => (
          // key must be unique — using the API's own id field
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
