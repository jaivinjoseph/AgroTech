import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";
import "./cart-animation.css";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  const username = location.state?.username || "";

  const handleCancel = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.qty;
    }
    return total;
  };

  const handlePay = async () => {
    const currentDate = new Date().toLocaleDateString();
    const totalCost = calculateTotal();

    try {
      // Send the cart items to the backend
      await axios.post("http://localhost:8080/api/cart", {
        cartItems: cartItems,
      });

      navigate("/account", {
        state: {
          username: username,
          cartItems: cartItems,
          date: currentDate,
          totalCost,
        },
        search: `?username=${encodeURIComponent(username)}`,
      });
    } catch (error) {
      console.error("Error adding cart items to the backend:", error);
    }
  };

  const handleSave = async () => {
    try {
      // Send the cart items to the backend to save in the database
      await axios.post("http://localhost:8080/api/cart/save", {
        cartItems: cartItems,
      });
      console.log("Cart items saved to the database");
    } catch (error) {
      console.error("Error saving cart items to the database:", error);
    }
  };

  return (
    <>
      <div>
        <h className="caa-1">Cart</h>
        <div className={`bx-ca${cartItems.length === 0 ? " empty-cart" : ""}`}>
          {cartItems.map((item, index) => (
            <div className="car-1" key={index}>
              {/* {/* <img
                src={require(`../vegetables/photo/${item.image}.jpg`)}
                alt={item.name}
                className="ca-t"
              /> */}
              {/* <img
                src={require(`../Fruits/fru-photo/${item.image}.jpg`)}
                alt={item.name}
                className="ca-t"
              /> */} 
              <h className="ite-1">{item.name}</h>
              <p className="ite-1">Quantity: {item.qty}</p>
              <p className="ite-1">Price: ₹{item.price * item.qty}/-</p>
              <button className="can-btn" onClick={() => handleCancel(index)}>
                <h className="x-1">X</h>
              </button>
            </div>
          ))}
        </div>
        {cartItems.length === 0 && <p className="emp">Your cart is empty!</p>}
      </div>
      {cartItems.length > 0 && (
        <div className="total-1">
          Grand Total: ₹{calculateTotal()}/-
          <div className="p-1">
            <div className="pp-1" onClick={handlePay}>
              Pay
            </div>
          </div>
        </div>
      )}

      <div className="con">
        <Link to="/" className="aro">
          <div className="aro-2">
            Continue Shopping
            <div className="aro-1"> →</div>
          </div>
        </Link>
      </div>
      {cartItems.length > 0 && (
        <div className="sa-1">
          <button className="sa-2" onClick={handleSave}>
            <h className="sa-3">Save</h>
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
