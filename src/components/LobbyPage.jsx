import React, { useEffect, useState } from 'react';
import {useLobbyContext} from '../context/LobbyContext';
import {useUserContext} from '../context/UserContext';
import { Button, Box, Grid, GridItem, Card, CardContent, styled } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';



function Lobby() {
  const {user} = useUserContext();
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
  ]);
  const [selectedTable, setSelectedTable] = useState(null);
  const { table, joinTable, leaveTable } = useLobbyContext();
  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
  };
  const userArray = [];

  const handleJoinTable = () => {
    console.log("player from context: ", user);
    
    if (selectedTable) {
      joinTable(selectedTable, user);
      console.log(user.username);
      userArray.push(user.username);
      if(userArray.length === 1){
        //This means the new user is first and the host on there waiting screen display a button to start
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
        <Typography variant="body2">
          <br />
          <br />
          Insert Player in lobby here
          {userArray.map((username, index) => (
            <Grid key={index}>{username}</Grid>
          ))}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleTableSelect()}>Join Lobby</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div>
      <h2>Lobby</h2>
      <h3>Available Tables:</h3>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>
            <button onClick={() => handleTableSelect(table.id)}>
              {table.name}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleJoinTable}>Join Table</button>
    </div>
  );
}

export default Lobby;