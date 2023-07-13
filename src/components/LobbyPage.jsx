import React, { useState } from 'react';

function Lobby() {
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
  ]);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
  };

  const handleJoinTable = () => {
    
    if (selectedTable) {
      console.log(`Joined table ${selectedTable}`);
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
      <button onClick={handleJoinTable}>Join Table</button>
    </div>
  );
}

export default Lobby;
