import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Card } from '@mui/material';
//import getCards from "./getCards";

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