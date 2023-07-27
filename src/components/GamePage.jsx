import React from 'react';
import { useUserContext } from '../context/UserContext';
import Rules from './Rules';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';
import  { useGameDisplayContext, useRankContext} from '../context/GameDisplayContext';

export default function GamePage(props) {
    const { user } = useUserContext();
    const started = true; 
    const finished  = false;
    const lobbyId = props.lobbyId;

    const {isPlaying, setIsPlaying } = useGameDisplayContext();
    const {ranks} = useRankContext();

    
    //TODO: Start game when the player array is recieved (handleStart())
    //TODO: After deciding the inital player state (turns, points, and components)
    //TODO: Pass info off to handleGameState
    const handleStart = () => {
        // Update the game state to indicate that the game has started.
    };

    
    //TODO: This should also send the player array to GameDisplay
    const handleGameState = () => {
        // Handle changes to the game state.
    };


    //TODO: When GameDisplay returns the RANKS[] array handleEnding()
    const handleEnding = () => {
        // Handle the end of the game.
    };


    //TODO: CSS for Components
    return (
        <>
            <div> - GamePage - </div>
            <Rules />
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

