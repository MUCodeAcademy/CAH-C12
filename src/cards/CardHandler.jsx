//import React from 'react';
import { getBlackCards, getWhiteCards } from './getCards';

const startSet = 0;
const endSet = 19;

export const Shuffle = (cardArray) => {
    let currentIndex = cardArray.length,
    temporaryValue,
    randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[randomIndex];
    cardArray[randomIndex] = temporaryValue;
    }

    return cardArray;
}


export const PromptHandler = () => {
    let blackCards = getBlackCards(startSet,endSet);

    Shuffle(blackCards);

    let promptCard = [];

    for(let i = 1; i >= 1; i--) {
        promptCard.push(blackCards[i]);
    };
    
    return promptCard;
}

export const UserHandler = () => {
    let whiteCards = getWhiteCards(startSet,endSet);

    Shuffle(whiteCards);
    let userCards = [];

    for(let i = 0; i < 10; i++) {
        userCards.push(whiteCards[i]);
    };

    return userCards;
}