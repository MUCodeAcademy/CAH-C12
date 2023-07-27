import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';

export default function WaitingScreen(props) {
    const isHost = props.isHost;
    console.log(isHost);
    return(
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
              <CircularProgress color="inherit" />
              {isHost && <Button variant="contained">Start Game</Button>}
            </Backdrop>
        </>
    )
} 