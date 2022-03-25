import react from 'react';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
       <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
