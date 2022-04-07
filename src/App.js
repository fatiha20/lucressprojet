import React from "react";
import Header from './front_end/Header';
import Home from './front_end/Home';
import Categories from './front_end/Categories';
import Reservation from './front_end/Reservation';
import Contact from './front_end/Contact';
import Login from "./front_end/Login";
import Test from "./front_end/Test";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
