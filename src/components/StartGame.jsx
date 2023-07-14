import React, { useState } from 'react';

function StartGame() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    { id: 3, name: 'Player 3' },
    { id: 4, name: 'Player 4' },
  ]);
  const [currentJudgeIndex, setCurrentJudgeIndex] = useState(0);
  const [cardsDealt, setCardsDealt] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleDealCards = () => {
    
    setCardsDealt(true);
  };

  const handleNextJudge = () => {
    setCurrentJudgeIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  return (
    <div>
      <h2>Game</h2>
      {!gameStarted && (
        <button onClick={handleStartGame}>Start Game</button>
      )}
      {gameStarted && !cardsDealt && (
        <button onClick={handleDealCards}>Deal Cards</button>
      )}
      {cardsDealt && (
        <div>
          <h3>Judge: {players[currentJudgeIndex].name}</h3>
          <button onClick={handleNextJudge}>Next Judge</button>
        </div>
      )}
    </div>
  );
}

export default StartGame;
