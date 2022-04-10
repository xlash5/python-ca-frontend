import react from 'react';
import { useState } from 'react';
import './App.css';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Home from './screens/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './constants/Firebase';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
