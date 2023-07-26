import React, { useState } from 'react';
import {useLobbyContext} from '../context/LobbyContext';
import {useUserContext} from '../context/UserContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Lobby() {
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
  ]);
  const [selectedTable, setSelectedTable] = useState(null);

  const { table, joinTable, leaveTable } = useLobbyContext();
  const { user } = useUserContext();

  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
    console.log("You selected table: ", tableId )
  };

  const handleJoinTable = () => {
    console.log("player from context: ", user);
    
    if (selectedTable) {
      joinTable(selectedTable, user);

    } else {
      console.log('No table selected');
    }
  };

  const LobbyOne = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          pp
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
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
      <button onMouseDown={handleJoinTable}>Join Table</button>
    </div>
  );
}

export default Lobby;
