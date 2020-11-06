export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.paylod;
    default:
      return state;
  }
};
