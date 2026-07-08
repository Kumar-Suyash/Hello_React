import { MENU_ITEM_IMAGES, FALLBACK_MENU_IMG } from "../utils/constants";

const ItemList = ({ itemCards }) => {
  return (
    <ul className="item-list">
      {itemCards?.map(({ card }) => {
        const { id, name, description, price, defaultPrice } = card.info;
        const displayPrice = (price || defaultPrice || 0) / 100;
        const imgSrc = MENU_ITEM_IMAGES[id] || FALLBACK_MENU_IMG;

        return (
          <li key={id} className="menu-item">
            <div className="item-details">
              <h4 className="item-name">{name}</h4>
              <p className="item-description">{description}</p>
              <span className="item-price">₹{displayPrice}</span>
            </div>
            <img className="item-img" src={imgSrc} alt={name} />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
