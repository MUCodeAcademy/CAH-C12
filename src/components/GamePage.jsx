import React from 'react';
import { useUserContext } from '../context/UserContext';
import Rules from './Rules';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';
import { useGameContext } from '../path/to/gameReducer';

export default function GamePage(props) {
    const {user} = useUserContext;
    //useLobbyContext
    const { state } = useGameContext();
    //Way to set / change players turn
    const { started, playersTurn, finished, lobbyId } = state;

    //soon to be state variables

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
           <Rules/>
           {started &&  
            <div>
                {isPlaying 
                    ?<GameDisplay isPlaying={true}/> 
                    :<GameDisplay isPlaying={false}/>
                }
            </div>
            }
            {finished && 
            <div>
                This is a temp for ending the game
                <WinDisplay ranks={[]}/>
            </div>
            }
        </>
    );
}

