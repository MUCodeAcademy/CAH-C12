import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateProvider  from './context/index.js';
import { LobbyProvider } from './context/LobbyContext';
import GameDisplay from "./components/GameDisplay.jsx";
import GamePage from "./components/GamePage.jsx"


// import reportWebVitals from './reportWebVitals';
// import CAHTable from './context/gamePageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
        <App />
    </StateProvider>
  </React.StrictMode>
);

