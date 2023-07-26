import React, { useReducer, useContext, createContext, useCallback } from 'react';
import {
  INITIAL_GAMEDISPLAY_STATE, 
  SET_IS_PLAYING,
  CLEAR_IS_PLAYING,
  gameDisplayReducer,
  INITIAL_RANK_STATE,
  SET_RANK_STATE,
  CLEAR_RANK_STATE,
  rankReducer
} from '../reducers/gameDisplayReducer';


const GameDisplayContext = createContext(null);

export function useGameDisplayContext() {
  return useContext(GameDisplayContext);
}

export function GameDisplayProvider(props) {
  const [isPlaying, dispatch] = useReducer(
    gameDisplayReducer,
    INITIAL_GAMEDISPLAY_STATE
  );

  const setIsPlaying = useCallback(
    (isPlaying) => {
      dispatch({ type: SET_IS_PLAYING, payload: isPlaying });
    },
    [dispatch]);

  const clearIsPlaying = useCallback(() => {
    dispatch({ type: CLEAR_IS_PLAYING });
  }, [dispatch]); 

  return (
    <GameDisplayContext.Provider value = {{ isPlaying, setIsPlaying, clearIsPlaying }}>
      {props.children}
    </GameDisplayContext.Provider>
  )
}

const RankContext = createContext(null);

export function useRankContext() {
  return useContext(RankContext);
}

export function RankProvider(props) {
  const [rank, dispatch] = useReducer(
    rankReducer,
    INITIAL_RANK_STATE
  );

  const setRank = useCallback(
    (rank) => {
      dispatch({ type: SET_RANK_STATE, payload: rank });
    },
    [dispatch]);

  const clearRank = useCallback(() => {
    dispatch({ type: CLEAR_RANK_STATE });
  }, [dispatch]); 

  return (
    <RankContext.Provider value = {{ rank, setRank, clearRank }}>
      {props.children}
    </RankContext.Provider>
  )
}