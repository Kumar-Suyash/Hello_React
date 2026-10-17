import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { clearCart, getItemPrice } from "../utils/cartSlice";

const formatPrice = (amount) =>
  amount.toLocaleString("en-IN", { maximumFractionDigits: 2 });

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + getItemPrice(item) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <div className="cart-empty">
          <h1>Your cart is empty</h1>
          <p>Add something tasty from a restaurant menu.</p>
          <Link to="/" className="cart-empty-btn">
            Browse restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
          Clear cart
        </button>
      </div>

      <div className="cart-content">
        <section className="cart-items">
          <ItemList items={cartItems} />
        </section>

        <aside className="bill-summary">
          <h3>Bill Details</h3>
          <div className="bill-row">
            <span>
              Item total ({totalQuantity} item{totalQuantity !== 1 ? "s" : ""})
            </span>
            <span>₹{formatPrice(totalPrice)}</span>
          </div>
          <div className="bill-row bill-total">
            <span>To pay</span>
            <span>₹{formatPrice(totalPrice)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
