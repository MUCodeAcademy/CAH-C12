import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import emitEvents from './sockets/emitEvents';
import listenEvents from './sockets/listenEvents';

const socket = io('http://localhost:3001');

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
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { handleGame, handleCards, handlePlay } = emitEvents(socket, players, currentPlayerIndex);

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    useEffect(() => {
      let timer;

      if (isPlaying) {
        timer = setTimeout(() => {
          handleNextPlayer();
        }, 20000); 

        return () => {
          clearTimeout(timer);
        };
      }
    }, [isPlaying, currentPlayerIndex]);

    return array;
    };

  //Finds if the game is started and sets the current Card Zar
  useEffect(() => {
    if (!gameStarted) {
      setCurrentJudgeIndex(Math.floor(Math.random() * players.length));
    }
  }, [gameStarted, players.length]);

  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setTimeout(() => {
        handleNextPlayer();
      }, 20000); 

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isPlaying, currentPlayerIndex]);


  //Main game function will send both info and a "true" value out
  //The info will be game settings
  //Instead of passivly handling cards we can just make/force auto draw for cards
  const handleDealCards = () => {
    if (cardsDealt) {
      return;
    }
    const deckOfCards = ['Card 1', 'Card 2', 'Card 3', /* ...and so on */];
    const shuffledDeck = shuffle(deckOfCards);
    const updatedPlayers = players.map((player, index) => ({
      ...player,
      hand: shuffledDeck.slice(index * 10, (index + 1) * 10),
    }));
    setPlayers(updatedPlayers);
    socket.emit('dealCards', updatedPlayers);
    
    setCardsDealt(true);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    handleGame();
    handleDealCards(); // Automatically deal cards when the game starts
  };

  const handleNextPlayer = (selectedCard) => {
    const currentPlayer = players[currentPlayerIndex];
    if (currentPlayer.selectedCard === null) {
        console.log(`${currentPlayer.name} has not played a card.`);
        return;
    }

    const updatedPlayers = players.map((player, index) =>
    index === currentPlayerIndex ? { ...player, selectedCard: null } : player
    );

    setPlayers(updatedPlayers);
    
    socket.emit('playCard', { selectedCard: null, currentPlayerIndex });

    const allPlayersPlayedCard = updatedPlayers.every(
        (player) => player.selectedCard !== null
    );

    if (allPlayersPlayedCard) {
        const roundWinnerIndex = 0;
        const updatedPlayerWithScore =  [...players];
        updatedPlayerWithScore[roundWinnerIndex].score += 1;
        updatedPlayerWithScore.forEach((player) => {
            player.selectedCard = null;
        });
        setPlayers(updatedPlayerWithScore);
        setCurrentJudgeIndex((prevIndex) => (prevIndex + 1) % players.length);
        const updatedPlayersForNextRound = players.map((player, index) => ({
            ...player,
            hand: shuffledDeck.slice(index, index +1),
        }));
        setPlayers(updatedPlayersForNextRound);
        setIsPlaying(true);
    } else {
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
    }

  };


  const handlePlayCard = (selectedCard) => {
    const currentPlayer = players[currentPlayerIndex];
    if (currentPlayer.selectedCard !== null) {
      console.log(`${currentPlayer.name} has already played a card.`);
      return;
    }

    if (!selectedCard) {
      console.error('No card selected.');
      return;
    }
    
    const updatedPlayers = players.map((player, index) => 
      index === currentPlayerIndex
        ? { ...player, selectedCard: selectedCard }
        : player
    );

    setPlayers(updatedPlayers);

    
    socket.emit('playCard', { selectedCard: card, currentPlayerIndex });
  };
    
  // Uses the listeners for the socket connection

  useEffect(() => {
    listenEvents( setIsPlaying, setCurrentPlayerIndex);
  }, [setIsPlaying, setCurrentPlayerIndex]);

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
          <button onClick={() => setIsPlaying(true)}>Start Timer</button>
          <button onClick={() => setIsPlaying(false)}>Stop Timer</button>
          <button onClick={() => handlePlayCard('Card 1')} disabled={!isPlaying}>
            Play Card
          </button>
          <p>Current Player: {players[currentPlayerIndex].name}</p>
        </div>
      )}
    </div>
  );
}

export default StartGame;