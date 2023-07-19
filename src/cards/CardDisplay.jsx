import React, { useEffect } from "react";
import { styled } from "@mui/material";
import { Box, Grid, Card } from '@mui/material';
import getCards from "./getCards";
import { useQuery } from "react-query";
import { getWhiteCards,getBlackCards } from "./getCards";

const startSet = 1;
const endSet = 2;
const [myCards, setCardSet] = [];

// const white = myCards.white;
// const black = myCards.black;
//const aCard = white;

const CardStyle = styled((props) => (
    <Card {...props} variant='outlined' /> ))
    ({
        fontFamily: 'Roboto',
        fontWeight: '550',
        border: '2px solid black',
        borderRadius: '8px',
        minHeight: '225px',
        minWidth: '150px',
        justifyContent: 'center',
        padding: '10px'
    });

const GridItem = styled((props) => (
    <Grid item xs {...props} /> ))
    ({
        flex: 0, 
        margin: 0,
        rowSpacing: 0.5,
        columnSpacing: 0.5
    })



const CardDisplay = ({text}) => {
    // const cardGetter = () => {
    //     setCardSet = getCards(startSet,endSet);
    // }
    let x = getWhiteCards(startSet,endSet);
    let y = getBlackCards(startSet,endSet);

    console.log(x);
    
    // useEffect(()=>{
    //     console.log(myCards);
    // },[myCards]); 


    return (
        <Box component="span" sx={{ display: 'flex', flex: 1, flexWrap: 'wrap'}}>
            <Grid container>
                <GridItem><CardStyle>json data</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem> 
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
                <GridItem><CardStyle>{text}</CardStyle></GridItem>
            </Grid>
        </Box>
    )
}

export default CardDisplay;