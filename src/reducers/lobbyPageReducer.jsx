export const JOIN_TABLE = "Join Table";
export const LEAVE_TABLE = "Leave Table";

export const INITIAL_TABLE_STATE = {
    tableId: null,
    tableName: null,
};

export function lobbyReducer(state, action) {
    switch (action.type) {
        case JOIN_TABLE:
            return {
                ...state,
                tableId: action.payload.id,
                tableName: action.payload.name
            };

        case LEAVE_TABLE:
            return {
                ...state,
                tableId: null,
                tableName: null
            };

        default:
            return state;
    }
}