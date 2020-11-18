export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return action.payload;
    case "SET_COURSES":
      return action.courses;
    case "ADD_COURSE":
      return state.concat(action.course);
    case "DELETE_COURSE":
      return state.filter((course) => course.id !== action.course.id);

    default:
      return state;
  }
};
