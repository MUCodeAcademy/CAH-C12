import React from 'react';
import { useGameContext } from '../path/to/gameReducer.js'; 

const JudgeScreen = () => {
  const { state, dispatch } = useGameContext();
  const { players, currentPlayerIndex } = state;
  const currentPlayer = players[currentPlayerIndex];
  const isJudge = currentPlayer.isJudge; 

  const handleJudgeSelection = (selectedCard) => {
    // Dispatch an action to update the game state with the judge's selection
    dispatch({ type: 'JUDGE_SELECT_CARD', payload: selectedCard });

    // Determine the round winner based on the judge's selection
    const roundWinnerIndex = players.findIndex((player) => player.selectedCard === selectedCard);
    const updatedPlayers = players.map((player, index) => ({
      ...player,
      selectedCard: null,
      score: index === roundWinnerIndex ? player.score + 1 : player.score,
    }));

    // Update the game state with the round winner and other changes
    dispatch({ type: 'UPDATE_ROUND_WINNER', payload: updatedPlayers });

    
  };

  return (
    <div>
      <h2>Judge's Screen</h2>
      <p>Current Judge: {currentPlayer.name}</p>
      <p>Selected Cards:</p>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name}: {player.selectedCard}
            {/* Render a button for each card if the current player is not the judge */}
            {!isJudge && player.selectedCard && (
              <button onClick={() => handleJudgeSelection(player.selectedCard)}>
                Select as Best
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JudgeScreen;


