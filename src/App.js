import LoginPage from "./components/LoginPage.jsx"
import RegisterPage from "./components/RegisterPage.jsx"
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Navigate,
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import NavBar from './components/Navbar';
import Lobby from "./components/LobbyPage.jsx";
import Temp from '../src/cards/Temp';
import CardDisplay from "./cards/CardDisplay.jsx";
import GetCards from "./cards/getCards.js";



function App() {
  return (
    <Router className="App">
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<LoginPage/>}/>
        <Route path="/lobbypage" element={<Lobby/>}/>
      </Routes>
      <CardDisplay/>
      {/* <RegisterPage /> */}
    </Router>
  );
}

export default App;
