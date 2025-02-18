import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../Redux/cartSlice";
import { HiXMark } from "react-icons/hi2";
import "../Styles/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, selectedSize ,quantity) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, selectedSize  ,quantity }));
    }
  };

  if (cart.length === 0) return <div className="empty-cart">Your cart is empty!</div>;

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <p>{cart.length} {cart.length === 1 ? "item" : "items"}</p>
        </div>
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <Link to={`/product/${item.id}`}>
                  <img src={item.image[0]} alt={item.title} className="cart-item-image" />
              </Link>
              <div className="cart-item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-description">Cotton T-shirt</p>
                <p className="item-size">Size: {item.selectedSize}</p>
                <div className="quantity-controls">
                  <button  className="quantity-btn" onClick={() => handleQuantityChange(item.id,item.selectedSize, item.quantity - 1)}>-</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button  className="quantity-btn"  onClick={() => handleQuantityChange(item.id, item.selectedSize,item.quantity + 1)}>+</button>
                </div>
                <p className="item-price">₹{item.price * item.quantity}</p>
              </div>
              <button  className="remove-btn"  onClick={() => dispatch(removeFromCart(item.id))}><HiXMark/></button>
            </div>
          ))}
        </div>
        <div className="back-to-shop">
          <a href="/">Back to shop</a>
        </div>
      </div>
      <div className="cart-summary">
        <h3>Summary</h3>
        <div className="summary-item">
          <span>ITEMS {cart.length}</span>
          <span>₹{total}</span>
        </div>
        <div className="summary-item">
          <span>SHIPPING</span>
          <select className="shipping-select">
            <option>Standard-Delivery ₹0.00</option>
          </select>
        </div>
        <div className="summary-total">
          <span>TOTAL PRICE</span>
          <span>₹{total}</span>
        </div>
        <button className="checkout-btn">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;