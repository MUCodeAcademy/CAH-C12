import React from 'react';
import { useUserContext } from '../context/UserContext';
import StartGame from './StartGame';
import Rules from './Rules';
import CardDisplay from '../cards/CardDisplay';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';
import { useGameContext } from '../path/to/gameReducer';

export default function GamePage(props) {
    const { user } = useUserContext();
    const { state } = useGameContext();
    const { started, playersTurn, finished, lobbyId } = state;

    const handleStart = () => {
        // Update the game state to indicate that the game has started.
    };

    const handleGameState = () => {
        // Handle changes to the game state.
    };

    const handleEnding = () => {
        // Handle the end of the game.
    };

    return (
        <>
            <div> - GamePage - </div>
            <Rules />
            {started &&
                <div>
                    This is the playing state for the game
                    <GameDisplay />
                </div>
            }
            {playersTurn &&
                <div>
                    This should render an alternate game display with a timer and "select Card" button
                    <GameDisplay />
                </div>
            }
            {finished &&
                <div>
                    This is a temp for ending the game
                    <WinDisplay />
                </div>
            }
        </>
    );
}

