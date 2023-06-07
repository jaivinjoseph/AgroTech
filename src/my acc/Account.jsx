import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../images/accc.png";
import "./account.css";

function Account() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [date, setDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    navigate("/");
  };

  const handleHomeClick = () => {
    navigate("/", {
      state: {
        loggedInUser: loggedInUser
      }
    });
  };

  const saveToDatabase = async () => {
    try {
      const response = await axios.post("http://localhost:8080/account", {
        username: loggedInUser?.username,
        cartItems: cartItems,
        date: date,
        totalCost: totalCost,
      });
      console.log("Order saved to database:", response.data.order);
    } catch (error) {
      console.error("Failed to save order:", error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const loggedInUsername = params.get("username") || "";

    if (location.state) {
      setCartItems(location.state.cartItems);
      setDate(location.state.date);
      setTotalCost(location.state.totalCost);
    }

    fetchUsername(loggedInUsername);
  }, [location]);

  useEffect(() => {
    const storedLoggedInUser = sessionStorage.getItem("loggedInUser");
    if (storedLoggedInUser) {
      setLoggedInUser(JSON.parse(storedLoggedInUser));
    }
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    }
  }, [loggedInUser]);

  const fetchUsername = async (loggedInUsername) => {
    try {
      const response = await axios.get("http://localhost:8080/demo");
      const users = response.data;
      const foundUser = users.find((user) => user.username === loggedInUsername);
      if (foundUser) {
        setLoggedInUser(foundUser);
      }
    } catch (error) {
      console.error("Failed to fetch username:", error);
    }
  };

  return (
    <>
      <div className="container1">
        <div className="ac">
          <img src={img} alt="hhhe" className="acc" />
          <h1>My Account</h1>
          <div className="account-info">
            <div className="ac-if">
              <h>Account Information</h>
            </div>
            <div className="account-info">
              <p>
                Username:{" "}
                <span className="username">{loggedInUser?.username}</span>
              </p>
            </div>
          </div>
          {cartItems.length > 0 && (
            <div className="order-info">
              <div className="ac-if-1">
                <h>Order Information</h>
              </div>
              <p>Items:</p>
              <div className="item-1">
                <ul className="item-2">
                  {cartItems.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
                <p>Date: {date}</p>
                <p>Total Cost: ₹{totalCost}/-</p>
              </div>
            </div>
          )}
          <div className="logout">
            <button
              onClick={handleLogout}
              style={{ backgroundColor: "#ffb900" }}
              className="logout-a"
            >
              Logout
            </button>
          </div>
          <div className="hm-sv">
          <div className="h-3">
            <button onClick={handleHomeClick} className="h-2">
              Home
            </button>
          </div>
          {cartItems.length > 0 && (
            <div className="save-order">
              <button onClick={saveToDatabase} className="save-order-btn">
                Save-Order
              </button>
            </div>
          
          )}
            </div>
        </div>
      </div>
    </>
  );
}

export default Account;
