import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loadingscreen from "./loadingscreen/Loadingscreen";
import Account from "./my acc/Account";
import Login from "./login/login";
import Vege from "./vegetables/vege";
import Cart from "./Cart/Cart";
import Home from "./components/home/Home";
import Fruit from "./Fruits/fruit";
import Get from "./get-help/get";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return <Loadingscreen />;
  }

  return (
    <Router>
      
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/vegetables" element={<Vege />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/fruit" element={<Fruit />} />
          <Route path="/get-help" element={<Get />} />

        </Routes>
  
    </Router>
  );
}

export default App;
