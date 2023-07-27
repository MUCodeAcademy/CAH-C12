import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';

//TODO: Make isHost recieve as true (for host) and display the start game buttton

export default function WaitingScreen(props) {
    const isHost = props.isHost;
    console.log(isHost);
    return(
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
              <CircularProgress color="inherit" />
              {isHost && <Button>Start Game</Button>}
            </Backdrop>
        </>
    )
} 