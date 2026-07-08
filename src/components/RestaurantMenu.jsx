import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useResturantMenu from "../utils/useResturantMenu";
import { MENU_RESTAURANT_IMAGES, FALLBACK_MENU_IMG } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams(); //* ← reads :resId from the URL
  const [openIndex, setOpenIndex] = useState(0);

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const resName = info?.name;
  const resCuisines = info?.cuisines?.join(", ");
  const resCostForTwo = info?.costForTwoMessage;
  const resRating = info?.avgRatingString;
  const resTotalRatings = info?.totalRatingsString;
  const resDeliveryTime = info?.sla?.slaString;
  const resBannerImg = MENU_RESTAURANT_IMAGES[resId] || FALLBACK_MENU_IMG;

  const menuCategories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  return (
    <div className="menu">
      <img className="restaurant-banner" src={resBannerImg} alt={resName} />

      <div className="restaurant-info">
        <h1>{resName}</h1>
        <p className="cuisines">{resCuisines}</p>
        <p className="meta">
          ⭐ {resRating} ({resTotalRatings}) • {resCostForTwo} • 🕐{" "}
          {resDeliveryTime}
        </p>
      </div>

      <h2 className="menu-heading">Menu</h2>

      {menuCategories.map((category, index) => {
        const categoryData = category.card.card;
        return (
          //* Controlled component pattern: The parent component (RestaurantMenu) manages the state of which category is open, and passes down the state and a toggle function to the child component (RestaurantCategory).

          //* lifting state up: The open/closed state of each category is managed in the parent component (RestaurantMenu) instead of within each RestaurantCategory component. This allows for better control and coordination between categories, such as ensuring only one category is open at a time.
          <RestaurantCategory
            key={categoryData.title}
            category={categoryData}
            isOpen={index === openIndex}
            onToggle={() =>
              setOpenIndex((currentOpenIndex) =>
                currentOpenIndex === index ? null : index,
              )
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
