import React, { useEffect } from "react";
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';
import { useCardDisplayContext } from "../context/CardDisplayContext";
import { PromptHandler, UserHandler } from "./CardHandler";



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

let playersTurn = false;
//const {playersTurn} = useGameDisplayContext();

export const BlackCardDisplay = (promptCard) => {
    promptCard = PromptHandler();
    playersTurn = false;

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
                                    {!playersTurn && <Button
                                        variant = 'contained' size = 'sm'
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
    userCards = UserHandler();

    const { selectedCard, setSelectedCard } = useCardDisplayContext();

    playersTurn = true;

    useEffect(() => {
        console.log(selectedCard.key)
    }, [selectedCard]);
    return (
      <Box>
        <Grid container>
          {
            userCards.map((data, index) => (
              <GridItem key={index}>
                <WhiteCardStyle>
                  <CardContent>
                    {data}
                    { playersTurn && <Button
                    variant = 'contained' size = 'sm'
                    onClick = {() => {
                        setSelectedCard(data);
                        //console.log(selectedCard);
                    }}>
                      Submit Card
                    </Button>
                    }
                  </CardContent>
                </WhiteCardStyle>
              </GridItem>
            ))
            }
        </Grid>
      </Box>
    )
}
