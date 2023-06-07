import React, { useState } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/Login", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
      <p>OR</p>
      <Link to="/Login">Login</Link>
    </>
  );
}

export default Signup;