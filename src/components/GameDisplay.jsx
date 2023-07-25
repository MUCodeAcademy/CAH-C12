import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardDisplay, { BlackCardDisplay, WhiteCardDisplay } from '../cards/CardDisplay';
import { PromptHandler, UserHandler } from '../cards/CardHandler';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//TODO: make a timer component to render below

const [playersSet, setPlayersSet] = useState([]);
//const {playerSet} = useLobbyContext();
const [userScores] = [0,0,0,0];
//const {userScore} = useWinDisplayContext();

const [userCards,setUserCards] = useState(PromptHandler);
const [promptCard,setPromptCard] = useState(UserHandler);
const [sumbittedCards, setSubmittedCard] = useState([]);
const [isPlaying, setIsPlaying] = useState(false);

//all State Vars imported from StartGame
const [currentJudgeIndex, setCurrentJudgeIndex] = useState(0);
const [cardsDealt, setCardsDealt] = useState(false);
const [gameStarted, setGameStarted] = useState(false);
const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

const handleNextPlayer = () => {
    //This should change the display as well 
    //Shifting the timer and button to the next player in "playersSet"
    //Should also check if player is judge if so skip them
    setIsPlaying(false);
    setCurrentPlayerIndex((currentPlayerIndex) = (currentPlayerIndex + 1) % playersSet.length);
};

const handleNextJudge = () => {
    //This should hold some info on displaying the prompt 
    setCurrentJudgeIndex((currentJudgeIndex) = (currentJudgeIndex + 1) % playersSet.length);
};

//TODO : card should be an object with the text(for card display) & playerId (who played it)

const handleSubmitions = (card) => {
    //Handles the cards currently in play
    //Card should either be the card obj and grabbed via id or text
    // or just pass the text for rerender at a later date.
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
	        //Display <WinDisplay/>
        }
    };
    handleNextPlayer((currentJudgeIndex + 1)%playersSet.length);
    handleNextJudge(currentJudgeIndex);
};

export function DisplayHands(promptCard,userCards){
    //
    setPromptCard(promptCard);
    setUserCards(userCards);
}


function gameState() {
    // This for after the inital render and setting of Cards Zar and first player  
    
}

export function GameDisplay() {
    //

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
                    <Item>{playersTurn && <Button onClick={() => handleSubmitions(card)}>Submit</Button>}</Item>
                </Grid>
                <Grid xs={6}>
                    <Item><WhiteCardDisplay userCards={userCards}/></Item>
                </Grid>
                <Grid xs={3}>
                    <Item><Timer /></Item>
                </Grid>
            </Grid>
        </Box>
    )
}