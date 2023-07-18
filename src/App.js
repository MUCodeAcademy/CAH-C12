import LoginPage from "./components/LoginPage.jsx"
import RegisterPage from "./components/RegisterPage.jsx"
import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/Navbar';
import Lobby from "./components/LobbyPage.jsx";
import Temp from '../src/cards/Temp';



function App() {
  return (
    <Router className="App">
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<LoginPage/>}/>
        <Route path="/lobbypage" element={<Lobby/>}/>
      </Routes>
      {/* <RegisterPage /> */}
    </Router>
  );
}

export default App;
