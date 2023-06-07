import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Server Response:", data);
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate(`/account?username=${form.username}`);
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="forr">
      <form onSubmit={handleSubmit}>
        <span>Username</span>
        <input type="text" name="username" onChange={handleForm} />
        <span>Password</span>
        <input type="password" name="password" onChange={handleForm} />
        {error && <p>{error}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
