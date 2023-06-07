import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bananaImage from"./fru-photo/banana.jpg"
import mangoImage from "./fru-photo/mango.jpg"
import papayaImage from "./fru-photo/papaya.jpg"
import "../Fruits/fruit.css";

function Fruit() {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      name: "Banana",
      desc: "farm-fresh",
      price: 25,
      image: "banana",
      qty: 1,
    },
    {
      id: 2,
      name: "Mango",
      desc: "farm-fresh",
      price: 30,
      image: "mango",
      qty: 1,
    },
    {
      id: 3,
      name: "Papaya",
      desc: "farm-fresh",
      price: 17.5,
      image: "papaya",
      qty: 1,
    },
  ]);

  const navigate = useNavigate();
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleQuantityChange = (id, increment) => {
    setFruits((prevFruits) =>
      prevFruits.map((fruit) =>
        fruit.id === id
          ? {
              ...fruit,
              qty: Math.max(0, fruit.qty + increment),
            }
          : fruit
      )
    );
  };

  const handleAddToCart = (fruit) => {
    setSelectedFruits((prevSelectedFruits) => [...prevSelectedFruits, fruit]);
  };

  return (
    <>
      <div className="frr-1">
        <h className="fr-2">Fruits</h>
      </div>
      <div className="fu-1">
        {fruits.map((fruit) => (
          <div className="fru-1" key={fruit.id}>
            <div className="fo-1">
              <div className="foo">
                {fruit.image === "banana" && (
                  <img src={bananaImage} alt={fruit.name} className="ba-1" />
                )}
                {fruit.image === "mango" && (
                  <img src={mangoImage} alt={fruit.name} className="ma-1" />
                )}
                {fruit.image === "papaya" && (
                  <img src={papayaImage} alt={fruit.name} className="fooo" />
                )}
              </div>
              <div>
                <h className="fo-2">{fruit.name}</h>
              </div>
            </div>
            <div className="fao-1">
              <p>"{fruit.desc}"</p>
            </div>
            <div className="pro-1">
              <p>Price: ₹{fruit.price * fruit.qty}/-</p>
            </div>
            <div className="ft">
              <div className="ftt">
                <button
                  className="ft-1"
                  onClick={() => handleQuantityChange(fruit.id, -1)}
                >
                  -
                </button>
                <p className="ft-2">{fruit.qty}</p>
                <button
                  className="ftt-2"
                  onClick={() => handleQuantityChange(fruit.id, 1)}
                >
                  +
                </button>
              </div>
              
              
              <button
  className="ft-3"
  onClick={() => handleAddToCart(fruit)}
  disabled={fruit.qty <= 0}
>
  Add to cart
</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="cart-btn-2"
        onClick={() =>
          navigate("/cart", { state: { cartItems: selectedFruits } })
        }
        disabled={selectedFruits.length === 0}
      >
        <h className="fw-1">View Cart</h>
      </button>
    </>
  );
}

export default Fruit;
