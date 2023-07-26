// gameReducer.js
import React, {useState, createContext, useReducer, useContext } from 'react';

const GameContext = createContext();

const initialState = {
  started: false,
  playersTurn: false,
  finished: false,
  lobbyId: null,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, started: true };
    case 'SET_PLAYERS_TURN':
      return { ...state, playersTurn: true };
    case 'FINISH_GAME':
      return { ...state, finished: true };
    case 'SET_LOBBY_ID':
      return { ...state, lobbyId: action.payload };
    default:
      return state;
  }
};

const useGameContext = () => useContext(GameContext);

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, useGameContext };
