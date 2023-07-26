export const JOIN_TABLE = "Join Table";
export const LEAVE_TABLE = "Leave Table";

export const INITIAL_TABLE_STATE = [
    {id: 1, name: 'Table 1', players: [] },
    {id: 2, name: 'Table 2', players: [] },
    {id: 3, name: 'Table 3', players: [] },
];

export function lobbyReducer(state, action) {
    switch (action.type) {
        case 'SET_TABLES':
            return action.payload;
        
        case JOIN_TABLE:
            return state.map(table => table.id === action.payload.id ? action.payload : table);

        case LEAVE_TABLE:
            return state.map(table => table.id === action.payload.id ? action.payload : table);

        default:
            return state;
    }
}