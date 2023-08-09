import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import PizzaApp from "./PizzaApp";




const App = () => {
  return (
    <>
      <nav className="navbar">
        <Link to = "/" >Home</Link>
        <Link to="/pizza" id = "order-pizza">Pizzas</Link>
      </nav>
      <h1>Bloomtech Eats</h1>

      <Routes>
      <Route path="/pizza" element={<PizzaApp/>}/> 
      </Routes>
    </>
  );
};
export default App; 