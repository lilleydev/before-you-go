export const lists = (state = [], action) => {
  switch (action.type) {
    case "SET_LISTS":
      return action.lists;
    case "CLEAR_LISTS":
      return [];
    default:
      return state;
  }
};
