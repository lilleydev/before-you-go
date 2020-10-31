export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return action.paylod;
    default:
      return state;
  }
};
