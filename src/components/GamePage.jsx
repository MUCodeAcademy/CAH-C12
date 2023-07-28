import React from 'react';
import { useUserContext } from '../context/UserContext';
import Rules from './Rules';
import WinDisplay from './WinDisplay';
import GameDisplay from './GameDisplay';
import  { useGameDisplayContext, useRankContext} from '../context/GameDisplayContext';
import { useLobbyContext } from '../context/LobbyContext';
import { useGameContext } from '../reducers/gamePageReducer';
import { StartGame } from './StartGame';

export default function GamePage(props) {
    const { user } = useUserContext();
    const { isPlaying, setIsPlaying } = useGameDisplayContext();
    const { ranks, setRanks } = useRankContext();
    const { tables } = useLobbyContext();
    const { started, finished, lobbyId, playersTurn } = useGameContext();
    
    lobbyId = props.lobbyId;
    isPlaying = props.isPlaying;

    started = true;
    finished = false;
    playersTurn = true;

    const [playerArray, setPlayerArray] = useState([]);
    setPlayerArray(tables[lobbyId]);
    setIsPlaying(isPlaying);


    //TODO: Start game when the player array is recieved (handleStart())
    //TODO: After deciding the inital player state (turns, points, and components)
    //TODO: Pass info off to handleGameState
    const handleStart = () => {
        // Update the game state to indicate that the game has started.
        StartGame();

        return { playerArray, playersTurn, playersRank };
    };

    
    //TODO: This should also send the player array to GameDisplay
    const handleGameState = () => {
        // Handle changes to the game state.
        handleStart();
        useEffect(() => {
            
        }, [setIsPlaying]);

        return
    };


    //TODO: When GameDisplay returns the RANKS[] array handleEnding()
    const handleEnding = () => {
        // Handle the end of the game.
        finished = true;
        playersTurn = false;


    };


    //TODO: CSS for Components
    return (
        <>
            <div> - GamePage - </div>
            <Rules />
           {started &&  
            <div>
                {isPlaying 
                    ?<GameDisplay playerArray={playerArray} isPlaying={true}/> 
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

