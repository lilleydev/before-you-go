import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { usersReducer } from "./usersReducer";
import { beerReducer } from "./beerReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  beers: beerReducer,
});
