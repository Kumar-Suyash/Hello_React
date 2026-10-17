import React from "react";
// import { useContext } from "react"; //* UserContext demo
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_IMAGES, FALLBACK_IMG } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import TopRatedFilter, { TOP_RATED_MIN } from "./TopRatedFilter";
import { withViewTransition } from "../utils/viewTransition";

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

const Body = () => {
  //* UserContext demo
  // const { loggedInUser, setUserName } = useContext(UserContext);
  //* milliseconds to keep the shimmer visible
  const SIMULATED_DELAY_MS = 1500;

  //* Local State variable to hold the list of restaurants
  //* Whenever state varibale, react triggers a reconciliation cycle
  //* (re-render the whole component)

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //* Top Rated is a toggle: we only store on/off, the list itself is derived below
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );
    const json = await response.json();

    const restaurants =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    //* artificial delay so shimmer is visible during development
    await new Promise((res) => setTimeout(res, SIMULATED_DELAY_MS));
    setListOfRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>You are offline</h1>
        <p>Please check your internet connection.</p>
      </div>
    );
  }

  //* derived data: recalculated on every render, never stored in state
  //* 1. start from the search results (or everything if there is no search)
  const searchResults =
    filteredRestaurants.length > 0 ? filteredRestaurants : listOfRestaurants;
  //* 2. Top Rated works on top of the search instead of replacing it
  const topRatedRestaurants = searchResults.filter(
    (restaurant) => restaurant.info.avgRating >= TOP_RATED_MIN,
  );
  const visibleRestaurants = isTopRated ? topRatedRestaurants : searchResults;

  //* cards glide to their new places instead of jumping (see utils/viewTransition.js)
  const toggleTopRated = () =>
    withViewTransition(() => setIsTopRated((isOn) => !isOn));

  //* Conditional rendering based on the state of listOfRestaurants
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            //* filter the list of restaurants based on the search text
            console.log(searchText);
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        {/* UserContext demo: typing here changed the name everywhere
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        /> */}
      </div>
      {/* old one-way version, kept for comparison: it replaced the search results,
          could not be turned off, and the click handler was on the whole row
      <div
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.5,
          );
          setFilteredRestaurants(filteredList);
        }}
      >
        <button>Top Rated Restaurants</button>
      </div> */}
      <TopRatedFilter
        isActive={isTopRated}
        count={topRatedRestaurants.length}
        total={searchResults.length}
        onToggle={toggleTopRated}
      />

      {visibleRestaurants.length === 0 ? (
        //* only happens when a search has no top rated restaurant in it
        <div className="mx-auto max-w-md py-16 text-center">
          <p className="text-lg font-bold text-main">
            No top rated restaurants here
          </p>
          <p className="mt-1 text-sm text-muted">
            None of these results are rated {TOP_RATED_MIN}★ or above.
          </p>
          <button
            type="button"
            onClick={toggleTopRated}
            className="mt-5 cursor-pointer rounded-full border-0 bg-primary px-5 py-2.5 font-[inherit] text-sm font-bold text-on-primary"
          >
            Show all ratings
          </button>
        </div>
      ) : (
        <div className="restaurant-list">
          {visibleRestaurants.map((restaurant) => (
            <Link // ← Link wraps the card, id goes into the URL
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                //* a unique name per card lets the view transition move each card smoothly
                viewTransitionName: `res-${restaurant.info.id}`,
              }}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <PromotedRestaurantCard resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
