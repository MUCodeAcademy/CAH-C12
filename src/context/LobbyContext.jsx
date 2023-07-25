import React, { createContext, useCallback, useContext, useReducer } from 'react';
import {
  INITIAL_TABLE_STATE,
  JOIN_TABLE,
  LEAVE_TABLE,
  lobbyReducer
} from "../reducers/lobbyPageReducer";

const LobbyContext = createContext(null);

export const useLobbyContext = () => {
  return useContext(LobbyContext);
}

export const LobbyProvider = (props) => {
  const {table: initialTable} = props;
  const [table, dispatch] = useReducer(lobbyReducer, initialTable || INITIAL_TABLE_STATE);

  const joinTable = useCallback(
    (tableInfo) => dispatch({ type: JOIN_TABLE, payload: tableInfo }),
    [dispatch]
  );

  const leaveTable = useCallback(
    () => dispatch({type: LEAVE_TABLE})
  );

  return (
    <LobbyContext.Provider value={{ table, joinTable, leaveTable }}>
      {props.children}
    </LobbyContext.Provider>
  )
}