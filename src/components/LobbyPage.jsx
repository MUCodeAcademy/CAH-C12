import React, { useEffect, useState } from 'react';
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";
import WaitingScreen from './WaitingScreen';
import { useLobbyContext } from '../context/LobbyContext';

//TODO: Look at WaitingScreen
//TODO: Finish CSS
//TODO: Grab a player array from Lobby to give to GamePage
//TODO: Check GamePage

function Lobby() {
  const {user} = useUserContext();
  const {tables, joinTable, leaveTable} = useLobbyContext();
  const navigate = useNavigate();

  const userArray = [];
  const [isHost, setIsHost] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [loading, setLoading] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  //TODO: FIX THIS
  //const tableArray = tables[selectedTable].length;
  const tableArray = [];
  const handleTemp = () => {
    //joinTable(selectedTable, user);
    tableArray.push(user);
  }
  
  const handleJoinTable = (props) => {
    setSelectedTable(props);
    console.log("player from context: ", user);
    // console.log(userArray);
    // console.log(selectedTable);
    if (selectedTable) {
      console.log(`Joined table ${selectedTable}`);
      //not working
      handleTemp();
      if(tableArray.length === 1){
        //This means the new user is first and the host on there waiting screen display a button to start
        setIsHost(true);
        setLoading(true);
        console.log(`${user.username} is host`);
      } else if (tableArray.length > 0 && tableArray.length < 4){
        console.log("hit2");
        setIsHost(false);
        setLoading(true);
      } else if(tableArray.length === 4){
        //Start the game and route to GamePage
        navigate("/GamePage");
      }
    } else {
      console.log('No table selected');
    }
  };

  useEffect(() => {
    console.log(user.username);
  }, [userArray]);

  useEffect(() => {
    //
    console.log(`Table ${selectedTable} was updated`)
  },[selectedTable]);

  const GridItem = styled((props) => (
    <Grid item xs {...props} /> ))
    ({
        margin: 0,
        rowSpacing: 0.5,
        columnSpacing: 0.5
    })
  
  const LobbyOne = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Lobby
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Lobby
        </Typography>
        <Typography variant="body2">
          <br />
          <br />
          Insert Player in lobby here
          {userArray.map((username, index) => (
            <GridItem key={index}>{username}</GridItem>
          ))}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleJoinTable(1)}>Join Lobby</Button>
      </CardActions>
    </React.Fragment>
  );

  const LobbyTwo = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Lobby 2
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Lobby
        </Typography>
        <Typography variant="body2">
          <br />
          <br />
          Insert Player in lobby here
          {userArray.map((username, index) => (
            <GridItem key={index}>{username}</GridItem>
          ))}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleJoinTable(2)}>Join Lobby</Button>
      </CardActions>
    </React.Fragment>
  );

  const LobbyThree = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Lobby 3
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Lobby
        </Typography>
        <Typography variant="body2">
          <br />
          <br />
          Insert Player in lobby here
          {userArray.map((username, index) => (
            <GridItem key={index}>{username}</GridItem>
          ))}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleJoinTable(1)}>Join Lobby</Button>
      </CardActions>
    </React.Fragment>
  );
  
  return(
    <div>
          <h1>Lobby</h1>
      <hr />
      {loading ? <WaitingScreen isHost={isHost}/> : 
         <Grid container spacing={8} justifyContent="center">
            <Grid item>
              <Card variant="outlined">{LobbyOne}</Card>
            </Grid>
            <Grid item>
              <Card variant="outlined">{LobbyTwo}</Card>
            </Grid>
            <Grid item>
              <Card variant="outlined">{LobbyThree}</Card>
            </Grid>
        </Grid>   
      }
      
    </div>
  );
}
export default Lobby;