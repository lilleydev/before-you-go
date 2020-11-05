export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return action.payload;
    case "ADD_COURSE":
      return [...state, action.payload];
    case "DELETE_COURSE":
      // debugger;
      return state.filter((course) => course.id !== action.payload.id);

    default:
      return state;
  }
};
