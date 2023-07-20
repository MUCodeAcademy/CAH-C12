import React from 'react';
import { useUserContext } from '../context/UserContext';
import StartGame from './StartGame';
import Rules from './Rules';
import CardDisplay from '../cards/CardDisplay';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';

export default function GamePage(props) {
    //
    const {user} = useUserContext;
    const lobbyId = props.lobbyId;


    const started = false;
    const playing = false;
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
                This is a temp for start
                <StartGame/>
            </div>
            }
            {playing && 
            <div>
                This is the playing state for the game
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