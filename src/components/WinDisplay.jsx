import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';


export default function WinDisplay(props) {
    // This should 
    // 1) Display winner and rankings (will get points/winner from props)
    // 2) Display buttons to either vote/force restart and Quit to title
    // Optional: Chat

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    //Expected array of players first to last
    const ranks = props.ranks;
    // const ranks = ["andrew","andy","drew","bob"];
    
    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Winner is:
            </Typography>
            <Typography variant="h5" component="div">
              1st: {ranks[0]}
            </Typography>
            <Typography variant="body2">
              2nd: {ranks[1]}
              <br />
              3rd: {ranks[2]}
              <br />
              4th: {ranks[3]}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Leaderboard</Button>
          </CardActions>
        </React.Fragment>
    );
    
    const handleRestart = () => {
        //
    }

    let navigate = useNavigate(); 
    const handleLobbyReturn = () => {
        let path = './LoginPage';
        navigate(path);
    }

    return(
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12}>
                    <Item><Card variant="outlined">{card}</Card></Item>
                </Grid>
                <Grid xs={6}>
                    <Item><Button onClick={(e) => handleRestart(e)}>Restart</Button></Item>
                </Grid>
                <Grid xs={6}>
                    <Item><Button onClick={(e) => handleLobbyReturn(e)}>Return to Lobby</Button></Item>
                </Grid>
            </Grid>
        </>
    )
}