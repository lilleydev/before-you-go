export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return action.payload;
    case "ADD_COURSE":
      return [...state, action.payload];
    default:
      return state;
  }
};
