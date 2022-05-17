// selectors
export const getAllTables = state => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

const tablesReducer = (statePart = [], action) => {
  switch(action.type){
    case UPDATE_TABLES:
      return [...action.payload];
    default: 
      return statePart;
  };
};

export default tablesReducer;