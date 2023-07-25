import React, { createContext, useCallback, useContext } from 'react';

import{
    INITIAL_CARD_DISPLAY,
    SET_SELECTED_CARD,
    CLEAR_SELECTED_CARD,
} from '../reducers/cardPageReducer';

const CardDisplayContext = createContext(null);

export const useCardDisplayContext = () => {
    return useContext(CardDisplayContext);
}

export const CardDisplayProvider = () => {
    const [selectedCard, dispatch] = useReducer(cardPageReducer, INITIAL_CARD_DISPLAY);

    const setSelectedCard = useCallback(
        (selectedCard) => dispatch({type: SET_SELECTED_CARD, payload: selectedCard}),
        [dispatch]
    );
    const clearSelectedCard = useCallback(
        (selectedCard) => dispatch({type: CLEAR_SELECTED_CARD, payload: selectedCard}),
        [dispatch]
    );

    return(
        <CardDisplayContext.Provider value={({selectedCard, setSelectedCard})}>
            {props.children}
        </CardDisplayContext.Provider>
    )
}