import React, { createContext, useCallback, useContext, useReducer, useEffect } from 'react';
import {
  INITIAL_TABLE_STATE,
  JOIN_TABLE,
  LEAVE_TABLE,
  lobbyReducer
} from "../reducers/lobbyPageReducer";

const port = process.env.REACT_APP_DB_PORT;

const LobbyContext = createContext(null);

export const useLobbyContext = () => {
  return useContext(LobbyContext);
}

export const LobbyProvider = (props) => {
  const [tables, dispatch] = useReducer(lobbyReducer, []);

  const fetchTables = async () => {
    try {
      const response = await fetch(`http://localhost:${port}/lobby/tables`);  // this should get the current tables
      const data = await response.json();
      dispatch({ type: 'SET_TABLES', payload: data });
    } catch (error) {
      console.error("Failed to fetch tables:", error);
    }
  };

  const joinTable = async (tableId, player) => {
    try {
      const response = await fetch(`http://localhost:${port}/lobby/join/${tableId}`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player })
      });
      const data = await response.json();
      dispatch({ type: JOIN_TABLE, payload: data });  // assuming server returns the updated table
    } catch (error) {
      console.error("Failed to join table:", error);
    }
  };

  const leaveTable = async (tableId, player) => {
    try {
      const response = await fetch(`http://localhost:${port}/lobby/leave/${tableId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player })
      });
      const data = await response.json();
      dispatch({ type: LEAVE_TABLE, payload: data }); // assuming server returns the updated table
    } catch (error) {
      console.error("Failed to leave table:", error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <LobbyContext.Provider value={{ tables, joinTable, leaveTable }}>
      {props.children}
    </LobbyContext.Provider>
  );
};