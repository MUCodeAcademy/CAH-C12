import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardDisplay, { BlackCardDisplay, WhiteCardDisplay } from '../cards/CardDisplay';
import { PromptHandler, UserHandler } from '../cards/CardHandler';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const [userCards,setUserCards] = useState(PromptHandler);
const [promptCard,setPromptCard] = useState(UserHandler);
export function DisplayHands(promptCard,userCards){
    //
    setPromptCard(promptCard);
    setUserCards(userCards);
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
                    <Item>6</Item>
                </Grid>
                <Grid xs={6}>
                    <Item><WhiteCardDisplay userCards={userCards}/></Item>
                </Grid>
                <Grid xs={3}>
                    <Item>8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}