import React, { useEffect } from "react";
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';
import { useCardDisplayContext } from "../context/CardDisplayContext";
import { PromptHandler, UserHandler } from "./CardHandler";

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

export const BlackCardDisplay = (props) => {
    const promptCard = props.promptCard;
    const isPlaying = props.isPlaying;

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
                                    {isPlaying && <Button
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


export const WhiteCardDisplay = (props) => {
    const userCards = props.userCards;
    const isPlaying = props.isPlaying;
    const { selectedCard, setSelectedCard } = useCardDisplayContext();


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
                    { isPlaying && <Button
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
