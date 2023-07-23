import React from 'react';
import { useUserContext } from '../context/UserContext';
import StartGame from './StartGame';
import Rules from './Rules';
import CardDisplay from '../cards/CardDisplay';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';

export default function GamePage(props) {
    const {user} = useUserContext;
    //useLobbyContext
    const lobbyId = props.lobbyId;

    //soon to be state variables
    const started = false;
    const playersTurn = false;
    const finished = false;

    const handleStart = () => {
        //
    }

    const handleGameState = () => {
        //
    }

    const handleEnding = () => {
        //
    }

    return(
        <>
           <div> - GamePage - </div>
           <Rules/>
           {started &&  
            <div>
                This is the playing state for the game
                <GameDisplay/>
            </div>
            }
            {playersTurn && 
            <div>
                This should render an alternate game display with a timer and "select Card" button
                <GameDisplay/>
            </div>
            }
            {finished && 
            <div>
                This is a temp for ending the game
                <WinDisplay/>
            </div>
            }
        </>
    )
}