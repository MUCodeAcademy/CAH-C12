import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { getAuth} from 'firebase/auth';


function Lobby() {
  const [table, setTable] = useState([
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
  ]);
  const socketRef = useRef(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const auth = getAuth();
  
  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_DB_PORT, {
        query: {
            username: auth.currentUser?.displayName,
        },
    });
    socketRef.current.on("tables", ({ table }) => {
        setTable(table);
    });
}, []);

  const handleTableSelect = (table) => {
    setSelectedTable(table.id);
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
        {table.map((table) => (
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
