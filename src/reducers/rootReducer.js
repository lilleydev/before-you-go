import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
});
