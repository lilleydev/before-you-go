export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return action.payload;
    case "ADD_COURSE":
      return [...state, action.payload];
    case "DELETE_COURSE":
      const courses = state.courses.filter((course) => course.id !== action.id);
      return [...state, action.paylod];
    default:
      return state;
  }
};
