

// Shuffle arrays to make things not so predictable
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



