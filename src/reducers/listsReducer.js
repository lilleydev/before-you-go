const initialState = [];

export const lists = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return action.lists;
    case "ADD_LIST":
      return state.concat(action.list);
    case "UPDATE_LIST":
      return state.map((list) =>
        list.id === action.list.id ? action.list : list
      );
    case "CLEAR_LISTS":
      return initialState;
    default:
      return state;
  }
};
