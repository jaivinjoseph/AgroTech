import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cucumberImage from "./photo/cucumber.jpg";
import pumpkinImage from "./photo/pumpkin.jpg";
import tomatoImage from "./photo/tomato.jpg";
import "./vege.css";

function Vege() {
  const [vegetables, setVegetables] = useState([
    {
      id: 1,
      name: "Tomato",
      desc: "farm-fresh",
      price: 20,
      image: "tomato",
      qty: 1,
    },
    {
      id: 2,
      name: "Cucumber",
      desc: "farm-fresh",
      price: 15,
      image: "cucumber",
      qty: 1,
    },
    {
      id: 3,
      name: "Pumpkin",
      desc: "farm-fresh",
      price: 30,
      image: "pumpkin",
      qty: 1,
    },
  ]);

  const navigate = useNavigate();
  const [selectedVegetables, setSelectedVegetables] = useState([]);

  const handleQuantityChange = (id, increment) => {
    setVegetables((prevVegetables) =>
      prevVegetables.map((vegetable) =>
        vegetable.id === id
          ? {
              ...vegetable,
              qty: Math.max(0, vegetable.qty + increment),
            }
          : vegetable
      )
    );
  };

  
  
  const handleAddToCart = (vegetable) => {
    setSelectedVegetables((prevSelectedVegetables) => [
      ...prevSelectedVegetables,
      vegetable,
    ]);
  };

  return (
    <>
      <div className="veg-1">
        <h className="veg-2">Vegetables</h>
      </div>
      <div className="ve-1">
        {vegetables.map((vegetable) => (
          <div className="box-1" key={vegetable.id}>
            <div className="to-1">
              <div className="too">
                {vegetable.image === "cucumber" && (
                  <img src={cucumberImage} alt={vegetable.name} className="cu-1" />
                )}
                {vegetable.image === "pumpkin" && (
                  <img src={pumpkinImage} alt={vegetable.name} className="pu-1" />
                )}
                {vegetable.image === "tomato" && (
                  <img src={tomatoImage} alt={vegetable.name} className="tooo" />
                )}
              </div>
              <div>
                <h className="to-2">{vegetable.name}</h>
              </div>
            </div>
            <div className="far-1">
              <p>"{vegetable.desc}"</p>
            </div>
            <div className="pr-1">
              <p>Price: ₹{vegetable.price * vegetable.qty}/-</p>
            </div>
            <div className="bt">
              <div className="btt">
                <button
                  className="bt-1"
                  onClick={() => handleQuantityChange(vegetable.id, -1)}
                >
                  -
                </button>
                <p className="t-1">{vegetable.qty}</p>
                <button
                  className="bt-2"
                  onClick={() => handleQuantityChange(vegetable.id, 1)}
                >
                  +
                </button>
              </div>
              <button
  className="bt-3"
  onClick={() => handleAddToCart(vegetable)}
  disabled={vegetable.qty <= 0}
>
  Add to cart
</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="cart-btn-1"
        onClick={() => navigate("/cart", { state: { cartItems: selectedVegetables } })}
        disabled={selectedVegetables.length === 0}
      >
        <h className="vw-1">View Cart</h>
      </button>
    </>
  );
}

export default Vege;
