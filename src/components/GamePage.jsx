import React from 'react';
import { useUserContext } from '../context/UserContext';
import Rules from './Rules';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';
import { useGameContext } from '../path/to/gameReducer';

export default function GamePage(props) {
<<<<<<< HEAD
    const { user } = useUserContext();
    const { state } = useGameContext();
    const { started, playersTurn, finished, lobbyId } = state;
=======
    const {user} = useUserContext;
    //useLobbyContext
    const lobbyId = props.lobbyId;

    const isPlaying = false;
    //const {isPlaying} = useGameDisplayContext();
    //const {ranks} = useGameDisplayContext();

    //soon to be state variables
    const started = true;
    const playersTurn = false;
    const finished = false;
>>>>>>> bc243dd77f13ad4b3ebdf33cca94a4b61d7049c7

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
<<<<<<< HEAD
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
=======
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
>>>>>>> bc243dd77f13ad4b3ebdf33cca94a4b61d7049c7
            }
        </>
    );
}

