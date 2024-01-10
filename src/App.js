import './App.css';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Otp from './screens/Otp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './screens/Appointment';
import Calender from './screens/Calender';
import CalenderForm from './screens/Calender-Form';
import FavMed from './screens/FavMed';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/home" element=<Home /> />
      <Route path="/login" element=<Login /> />
      <Route path="/otp" element=<Otp /> />
      <Route path="/register" element=<Register /> />
      <Route path="/apt" element=<Appointment /> />
      <Route path="/cal" element=<Calender /> />
      <Route path="/calform" element=<CalenderForm /> />
      <Route path="favmed" element=<FavMed /> />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
