import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Card } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import { useCardDisplayContext } from "../context/CardDisplayContext";

let playersTurn = false;
//const {playersTurn} = useGameDisplayContext();

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
    //Bring to state
    const {setSelectedCard} = useCardDisplayContext();
    return (
        <Box>
            <Grid container >
                {
                    promptCard.map((data, index) => (
                        <GridItem key={index}>
                            <BlackCardStyle>
                                <CardContent>
                                    {data}
                                    {playersTurn && <Button
                                        variant="solid"
                                        size="sm"
                                        color="primary"
                                        aria-label="Explore Bahamas Islands"
                                        sx={{ ml: "auto", fontWeight: 600 }}
                                        onClick={() => {
                                            setSelectedCard(data);
                                    }}>
                                        Submit Card
                                    </Button>}
                                </CardContent>
                            </BlackCardStyle>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}


export const WhiteCardDisplay = (userCards) => {
    //Bring to state
    const [selectedCard, setSelectedCard] = useState("");
    return (
        <Box>
            <Grid container>
                {
                    userCards.map((data, index) => (
                        <GridItem key={index}>
                            <WhiteCardStyle>
                                <CardContent>
                                    {data}
                                    {playersTurn && <Button
                                        variant="solid"
                                        size="sm"
                                        color="primary"
                                        aria-label="Explore Bahamas Islands"
                                        sx={{ ml: "auto", fontWeight: 600 }}
                                        onClick={() => {
                                            setSelectedCard(data);
                                    }}>
                                        Submit Card
                                    </Button>}
                                </CardContent>
                            </WhiteCardStyle>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}

