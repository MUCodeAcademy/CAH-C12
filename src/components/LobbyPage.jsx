import React, { useEffect, useState } from 'react';
import { Button, Box, Grid, Card, CardContent, styled } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';
import { useUserContext } from '../context/UserContext';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const GridItem = styled((props) => (
  <Grid item xs {...props} /> ))
  ({
      margin: 0,
      rowSpacing: 0.5,
      columnSpacing: 0.5
  })


function Lobby() {
  const {user} = useUserContext();
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
  ]);


  const [selectedTable, setSelectedTable] = useState(null);
  const userArray = [];
  const [loading, setLoading] = useState(false);
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleJoinTable = () => {
    console.log("player from context: ", user);

    if (selectedTable) {
      console.log(`Joined table ${selectedTable}`);
      //joinTable(selectedTable, user);
      console.log(user.username);
      userArray.push(user.username);
      if(userArray.length === 1){
        //This means the new user is first and the host on there waiting screen display a button to start
      } else if (userArray.length > 0 && userArray.length < 4){
        return (
        <div className="Lobby">
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={open}
        onClick={handleClose}
        >
        <CircularProgress color="inherit" />
       </Backdrop>
        </div>
      )
      } else if(userArray.length === 4){
        //Start the game and route to GamePage
      }
    } else {
      console.log('No table selected');
    }
  };

  useEffect(() => {
    console.log(user.username);
  }, [userArray]);

  //Still deciding whether it should be sepereate cards or not 
  const Lobby = (
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
        <Button size="small" onClick={() => handleJoinTable()}>Join Lobby</Button>
      </CardActions>
    </React.Fragment>
  );
  
  return(
    <div>
          <h1>Lobby</h1>
      <hr />
      <Grid container spacing={8} justifyContent="center">
          <Grid item>
            <Card variant="outlined">{Lobby}</Card>
          </Grid>
          <Grid item>
            <Card variant="outlined">{Lobby}</Card>
          </Grid>
          <Grid item>
            <Card variant="outlined">{Lobby}</Card>
          </Grid>
          <Button onClick={handleOpen}>Show backdrop</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Grid>

    </div>
  );
}
export default Lobby;