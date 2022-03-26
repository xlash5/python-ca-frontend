import react from 'react';
import { useState } from 'react';
import './App.css';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
