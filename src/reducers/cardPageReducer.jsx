export const INITIAL_CARD_DISPLAY = null;
export const CLEAR_SELECTED_CARD = 'Clear Selected Card';
export const SET_SELECTED_CARD = 'Set Selected Card';

export function cardPageReducer(state, action) {
    switch(action.type){
        case SET_SELECTED_CARD:
            return action.payload;
        case CLEAR_SELECTED_CARD:
            return INITIAL_CARD_DISPLAY;
        default:
            return state;
    }
}