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
import Menu from "./components/Menu.jsx"


function App() {
  return (
    <div className="App">
      <Router>
  <Menu />
    <Routes>
      <Route path='/' exact element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      {/* <Route path='/lobby' element={<LobbyPage />}/>
      <Route path='/game' element={<GamesPage />}/> */}
      <Route path='*' element={<Navigate to="/" />} />
    </Routes> 
  </Router>
    </div>
  );
}

export default App;
