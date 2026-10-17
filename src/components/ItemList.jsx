import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_IMAGES, FALLBACK_MENU_IMG } from "../utils/constants";
import { addItem, removeItem, getItemPrice } from "../utils/cartSlice";

//* items: array of plain item objects ({ id, name, price, ... })
//* reused by RestaurantCategory (menu) and Cart
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getQuantity = (id) =>
    cartItems.find((cartItem) => cartItem.id === id)?.quantity ?? 0;

  const handleAddItem = (item) => {
    //* dispatch an action to the cart slice
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <ul className="item-list">
      {items?.map((item) => {
        const { id, name, description } = item;
        const imgSrc = MENU_ITEM_IMAGES[id] || FALLBACK_MENU_IMG;
        const quantity = getQuantity(id);

        return (
          <li key={id} className="menu-item">
            <div className="item-details">
              <h4 className="item-name">{name}</h4>
              <p className="item-description">{description}</p>
              <span className="item-price">₹{getItemPrice(item)}</span>
            </div>
            <div className="item-img-wrapper">
              <img className="item-img" src={imgSrc} alt={name} />
              {quantity === 0 ? (
                <button
                  className="add-btn"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              ) : (
                <div className="qty-stepper">
                  <button
                    aria-label={`Remove one ${name}`}
                    onClick={() => handleRemoveItem(item)}
                  >
                    −
                  </button>
                  <span className="qty-count">{quantity}</span>
                  <button
                    aria-label={`Add one more ${name}`}
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
