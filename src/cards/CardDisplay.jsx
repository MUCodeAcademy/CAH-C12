import React, {useState, useEffect} from "react";
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';
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

let playersTurn = false;
//const {playersTurn} = useGameDisplayContext();

export const BlackCardDisplay = (promptCard) => {
    promptCard = PromptHandler();

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
    userCards = UserHandler();

    const [ selectedCard, setSelectedCard ] = useState('');

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

