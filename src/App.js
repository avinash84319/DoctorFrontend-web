import './App.css';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Otp from './screens/Otp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
