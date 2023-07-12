import LoginPage from "./components/LoginPage.jsx"
import RegisterPage from "./components/RegisterPage.jsx"
import './App.css';
import React, {useState, useEffect} from 'react';
// import { useUserContext } from '../context/UserContext';
// import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth';

function App() {
  return (
    <div className="App">
      <LoginPage />
      {/* <RegisterPage /> */}
    </div>
  );
}

export default App;
