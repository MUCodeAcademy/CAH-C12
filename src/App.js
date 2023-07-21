import LoginPage from "./components/LoginPage.jsx"
import RegisterPage from "./components/RegisterPage.jsx"
import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Lobby from "./components/LobbyPage.jsx";
import CardDisplay from "./cards/CardDisplay.jsx";



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
