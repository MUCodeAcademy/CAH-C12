import React from 'react';

const CardSelectionScreen = ({ userCards, onSelectCard }) => {
  return (
    <div>
      <h2>Select a Card</h2>
      <ul>
        {userCards.map((card, index) => (
          <li key={index}>
            {card}
            <button onClick={() => onSelectCard(card)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSelectionScreen;
