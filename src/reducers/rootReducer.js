import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import usersReducer, { usersReducer } from "./usersReducers";

export const rootReducer = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
});
