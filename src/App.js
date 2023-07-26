import LoginPage from "./components/LoginPage.jsx"
// import RegisterPage from "./components/RegisterPage.jsx"
import './App.css';
import React from 'react';
import About from './components/About/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Lobby from "./components/LobbyPage.jsx";
<<<<<<< HEAD
import { GameProvider } from './path/to/gameReducer.js';
=======
// import CardDisplay from "./cards/CardDisplay.jsx";
>>>>>>> bc243dd77f13ad4b3ebdf33cca94a4b61d7049c7



function App() {
  return (
    <Router className="App">
      <NavBar/>
      <GameProvider>
      <Routes>
        <Route path='/' exact element={<LoginPage/>}/>
        <Route path="/lobbypage" element={<Lobby/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </GameProvider>
    </Router>
  );
}

export default App;
