export const beerReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BREWERIES":
      return action.payload;
    default:
      return state;
  }
};
