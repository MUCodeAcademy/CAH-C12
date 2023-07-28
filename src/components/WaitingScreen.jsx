import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function WaitingScreen(props) {
    const isHost = props.isHost;
    //const isHost = false;
    const navigate = useNavigate();

    const handleStartGame = () => {
        //
        navigate('/gamepage');
    }
    return(
        <>
            {isHost ? <Button onClick={() => handleStartGame()}>Start Game</Button> :
            <>
                <div>Waiting for the Host</div>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
                <CircularProgress color="inherit" />
                </Backdrop>
            </>
            }
        </>
    )
} 