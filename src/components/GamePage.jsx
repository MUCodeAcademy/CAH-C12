import React from 'react';
import { useUserContext } from '../context/UserContext';
import Rules from './Rules';
import CardDisplay from '../cards/CardDisplay';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';

export default function GamePage(props) {
    const {user} = useUserContext;
    //useLobbyContext
    const lobbyId = props.lobbyId;

    const isPlaying = false;
    //const {isPlaying} = useGameDisplayContext();
    //const {ranks} = useGameDisplayContext();

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
    )
}