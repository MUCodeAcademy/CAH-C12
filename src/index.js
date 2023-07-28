import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateProvider  from './context/index.js';


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

