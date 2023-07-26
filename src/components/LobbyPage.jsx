import React, { useState } from 'react';
import {useLobbyContext} from '../context/LobbyContext';
import {useUserContext} from '../context/UserContext';

function Lobby() {
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
  ]);
  const [selectedTable, setSelectedTable] = useState(null);

  const { table, joinTable, leaveTable } = useLobbyContext();
  const { player } = useUserContext();

  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
    console.log("You selected table: ", tableId )
  };

  const handleJoinTable = () => {
    console.log("player from context: ", player);
    
    if (selectedTable) {
      joinTable(selectedTable, player);

    } else {
      console.log('No table selected');
    }
  };

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
