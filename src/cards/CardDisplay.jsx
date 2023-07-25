import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Card } from '@mui/material';



const WhiteCardStyle = styled((props) => (
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

const BlackCardStyle = styled((props) => (
    <Card {...props} variant='outlined' /> ))
    ({
        fontFamily: 'Roboto',
        fontWeight: '550',
        border: '2px solid white',
        borderRadius: '8px',
        minHeight: '225px',
        minWidth: '150px',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: 'black',
        color: 'white'
    });

const GridItem = styled((props) => (
    <Grid item xs {...props} /> ))
    ({
        margin: 0,
        rowSpacing: 0.5,
        columnSpacing: 0.5
    })

export const BlackCardDisplay = (promptCard) => {

    return (
        <Box>
            <Grid container >
                {
                    promptCard.map((data, index) => (
                        <GridItem key={index}><BlackCardStyle>{data}</BlackCardStyle></GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}


export const WhiteCardDisplay = (userCards) => {

    return (
        <Box>
            <Grid container>
                {
                    userCards.map((data, index) => (
                        <GridItem key={index}><WhiteCardStyle>{data}</WhiteCardStyle></GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}

