import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { courseForm } from "./courseForm";
import { usersReducer } from "./usersReducer";
import { beerReducer } from "./beerReducer";
import { currentUserReducer } from "./currentUserReducer";
import { loginForm } from "./loginFormReducer";
import { lists } from "./listsReducer";
import { signupForm } from "./signupForm";
import { listForm } from "./listForm";

export const rootReducer = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  courseForm,
  beers: beerReducer,
  currentUser: currentUserReducer,
  loginForm,
  lists,
  signupForm,
  listForm,
});
// the keys in my redux store ^
