import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { usersReducer } from "./usersReducer";
import { beerReducer } from "./beerReducer";
import { currentUserReducer } from "./currentUserReducer";
import { loginForm } from "./loginFormReducer";
import { bucketLists } from "./bucketListsReducer";
import { signupForm } from "./signupForm";

export const rootReducer = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  beers: beerReducer,
  currentUser: currentUserReducer,
  loginForm,
  bucketLists,
  signupForm,
});
