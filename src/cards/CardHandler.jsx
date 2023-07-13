import React from 'react';
import getCards from './getCards';

const CardHandler = () => {
    let cards = getCards([]);

    for(let card of json.cards ) {
        card.white = card.white.map((index) =>
        Object.assign(
            {},
            { text: json.white[index] },
            { card: cards.length },
        ));
        card.black = card.black.map((index) =>
        Object.assign(
            {},
            { text: json.black[index] },
            { card: cards.length },
        ));
        cards.push(card);
    }
    return cards;
}

export default CardHandler;