import React from "react";
// import { useContext } from "react"; //* UserContext demo
import { RESTAURANT_IMAGES, FALLBACK_IMG } from "../utils/constants";
// import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  //* UserContext demo
  // const { loggedInUser } = useContext(UserContext);
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
  } = resData;

  const imgSrc = RESTAURANT_IMAGES[id] ?? FALLBACK_IMG;

  return (
    <div className="restaurant-card">
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
          {/* , {loggedInUser}  ← UserContext demo */}
        </p>
      </div>
    </div>
  );
};

//* Higher Order Component to add promoted/discount label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const info = resData?.aggregatedDiscountInfoV3 || null;

    return (
      <div className="promoted-wrapper">
        {info?.header || info?.subHeader ? (
          <div className="discount-badge">
            <span className="discount-header">{info.header}</span>
            <span className="discount-sub">{info.subHeader}</span>
          </div>
        ) : null}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
