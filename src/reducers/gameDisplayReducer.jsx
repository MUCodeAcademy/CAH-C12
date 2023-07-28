export const INITIAL_GAMEDISPLAY_STATE = null;
export const SET_IS_PLAYING = "Set Game State";
export const CLEAR_IS_PLAYING = "Clear Game State";

export function gameDisplayReducer(action, state) {
  switch(action.type) {
    case  SET_IS_PLAYING:
      return action.payload;
    case  CLEAR_IS_PLAYING:
      return INITIAL_GAMEDISPLAY_STATE;
    default: 
      return state;
  }
}

export const INITIAL_RANK_STATE = [];
export const SET_RANK_STATE = "Set Rank State";
export const CLEAR_RANK_STATE = "Clear Rank State";

export function rankReducer(action, state) {
  switch(action.type) {
    case  SET_RANK_STATE:
      return action.payload;
    case  CLEAR_RANK_STATE:
      return INITIAL_RANK_STATE;
    default: 
      return state;
  }
}

