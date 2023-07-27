import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { BlackCardDisplay, WhiteCardDisplay } from '../cards/CardDisplay';
import { PromptHandler, UserHandler } from '../cards/CardHandler';
import { Paper, Box } from '@mui/material';
import { WinDisplay } from './WinDisplay';
import { useCardDisplayContext } from '../context/CardDisplayContext';
//import { start } from 'repl';
import {Timer} from './Timer';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export function GameDisplay(props) {
    //

    //TODO: Style a timer component to render below
    const [timer, setTimerActive] = useState(false);

    const startTimer = () => {
        setTimerActive(true);
        setTimeout(() => {
            setTimerActive(false);
            handleTimerExpired();
        }, 20000);
    };

    const handleCardSelection = (card) => {
        if (!timer) {
           setSelectedCard(card);
           setTimerActive(false);
           startTimer();
        }
    };
    //const {playerSet} = useLobbyContext();
    const [playersSet, setPlayersSet] = useState([]);
    //This is sorted and output as ranks[];
    const [userScores] = [0,0,0,0];
    
    //Game State
    const [isPlaying, setIsPlaying] = useState(false);

    //Card State
    const [userCards,setUserCards] = useState(PromptHandler);
    const [promptCard,setPromptCard] = useState(UserHandler);
    const [sumbittedCards, setSubmittedCard] = useState([]);
    const {selectedCard, setSelectedCard} = useCardDisplayContext();
    const previousSelectedCard = "";
    //Index State
    //currentJudgeIndex and currentPlayerIndex should compare on the same given array
    const [currentJudgeIndex, setCurrentJudgeIndex] = useState(0);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    //TODO: Shift Display to Show Buttons on Cards to select a card
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

    //TODO: handleSubmission should call this when the Card Zar display is ready ( with array[cards])
    const handleNextJudge = () => {
        //This should hold some info on displaying the prompt 
        setCurrentJudgeIndex((currentJudgeIndex) = (currentJudgeIndex + 1) % playersSet.length);
    };

    
    //TODO : card should be an object with the text(for card display) & playerId (who played it)
    //TODO : an Idea is to always keep the index of them the same player users=[playerone]   scores=[playerone's score]
    const handleSubmission = (card) => {
        //Order user cards
        setSubmittedCard([...sumbittedCards, card]);
        if(sumbittedCards.length === 4){
            //Send the Cards to the Card Zar
            userScores[currentPlayerIndex] = userScores[currentPlayerIndex] + 1;
            if(userScores[currentPlayerIndex] === 7){
                let finalScores = [];
                for(let i = 0;i < userScores.length; i++){
                    if(userScores[i] > userScores[((i+1)%playersSet.length)]){
                        finalScores.push(userScores[i]);
                    };
                }
                //TODO: Pass the array ranks[] to GamePage
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

    const handleTimerExpired = () => {
        if (selectedCard) {
            handleSubmission(selectedCard);
        }
    };


    //TODO: Get the card text from WhiteCardDisplay when the card is selected
    // if(selectedCard === null || selectedCard === previousSelectedCard){
    //    console.error("Error getting Selected User's Card")
    //} else {
    //      handleSubmission(selectedCard);
    //}
    setIsPlaying(props.isPlaying);

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
                    <Item><BlackCardDisplay promptCard={promptCard} isPlaying={isPlaying}/></Item>
                </Grid>
                <Grid xs={4}>
                    <Item>Player 4's Cards</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>5</Item>
                </Grid>
                <Grid xs={6}>
                    <Item><WhiteCardDisplay userCards={userCards} isPlaying={isPlaying}/></Item>
                </Grid>
                <Grid xs={3}>
                    <Item>{isPlaying && '<Timer />'}</Item>
                </Grid>
            </Grid>
        </Box>
    )
};

export default GameDisplay;