import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { BlackCardDisplay, WhiteCardDisplay } from '../cards/CardDisplay';
import { PromptHandler, UserHandler } from '../cards/CardHandler';
import { Button, Paper, Box } from '@mui/material';
import { WinDisplay } from './WinDisplay';
import { useCardDisplayContext } from '../context/CardDisplayContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export function GameDisplay() {
    //

    //TODO: make a timer component to render below

const [playersSet, setPlayersSet] = useState([]);
//const {playerSet} = useLobbyContext();
const [userScores] = [0,0,0,0];
//const {userScore} = useWinDisplayContext();

//This is for a function yet to be made but detailed in the Body
const {selectedCard, setSelectedCard} = useCardDisplayContext();
const previousSelectedCard = "";

const [userCards,setUserCards] = useState(PromptHandler);
const [promptCard,setPromptCard] = useState(UserHandler);
const [sumbittedCards, setSubmittedCard] = useState([]);

//This is playersTurn and should be sent to state (make it isPlaying)
const [isPlaying, setIsPlaying] = useState(false);

//all State Vars imported from StartGame
//currentJudgeIndex and currentPlayerIndex should compare on the same given array
const [currentJudgeIndex, setCurrentJudgeIndex] = useState(0);
const [cardsDealt, setCardsDealt] = useState(false);
const [gameStarted, setGameStarted] = useState(false);
const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

const handleNextPlayer = () => {
    //This should change the display as well 
    //Shifting the timer and button to the next player in "playersSet"
    //Should also check if player is judge if so skip them
    setIsPlaying(false);
    if(currentJudgeIndex !== ((currentPlayerIndex + 1) % playersSet.length)){
        //
        setCurrentPlayerIndex((currentPlayerIndex) = (currentPlayerIndex + 1) % playersSet.length);
    } else {
        setCurrentPlayerIndex((currentPlayerIndex) = (currentPlayerIndex + 2) % playersSet.length);
    }
};

    const handleNextJudge = () => {
        //This should hold some info on displaying the prompt 
        setCurrentJudgeIndex((currentJudgeIndex) = (currentJudgeIndex + 1) % playersSet.length);
    };

    //TODO : card should be an object with the text(for card display) & playerId (who played it)

const handleSubmitions = (card) => {
    setSubmittedCard([...sumbittedCards, card]);
    if(sumbittedCards.length === 4){
        //Send the Cards to the Card Zar
        //Change displays should be handled in here as well
        //Something will be passed up to GamePage.
        userScores[currentPlayerIndex] = userScores[currentPlayerIndex] + 1;
        if(userScores[currentPlayerIndex] === 7){
            let finalScores = [];
            for(i = 0;i < userScores.length; i++){
                if(userScores[i] > userScores[((i+1)%playersSet.length)]){
                    finalScores.push(userScores[i]);
                };
            }
	        //Pass array of scores into the conditonal render
	        //Display <WinDisplay/> in GamePage
        }
    };
    handleNextPlayer((currentJudgeIndex + 1)%playersSet.length);
    handleNextJudge(currentJudgeIndex);
};

    function displayHands(promptCard,userCards){
        //
        setPromptCard(promptCard);
        setUserCards(userCards);
    }


function gameState() {
    // This for the inital render and setting of Cards Zar and first player  
    
}

function GameDisplay() {
    // Make a useEffect or while statement to check playersTurn 
    // Since it's at state we should reset it after the player selects a card in CardDisplay
    // When playersTurn = false
    // if(selectedCard === null || selectedCard === previousSelectedCard){
    //    console.error("Error get Selected User's Card")
    //} else {
    //      handleSubmittion(selectedCard);
    //}

    return(
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={3}>
                    <Item>1</Item>
                </Grid>
                <Grid xs={6}>
                    <Item>Player 3's Cards</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>3</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>Player 2's Cards</Item>
                </Grid>
                <Grid xs={4}>
                    <Item><BlackCardDisplay promptCard={promptCard}/></Item>
                </Grid>
                <Grid xs={4}>
                    <Item>Player 4's Cards</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>5</Item>
                </Grid>
                <Grid xs={6}>
                    <Item><WhiteCardDisplay userCards={userCards}/></Item>
                </Grid>
                <Grid xs={3}>
                    <Item>{playersTurn && <Timer />}</Item>
                </Grid>
            </Grid>
        </Box>
    )}
};

export default GameDisplay;