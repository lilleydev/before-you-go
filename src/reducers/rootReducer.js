import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { usersReducer } from "./usersReducer";
import { beerReducer } from "./beerReducer";
import { currentUserReducer } from "./currentUserReducer";
import { loginForm } from "./loginFormReducer";
import { lists } from "./listsReducer";
import { signupForm } from "./signupForm";
import { newListForm } from "./newListForm";

export const rootReducer = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  beers: beerReducer,
  currentUser: currentUserReducer,
  loginForm,
  lists,
  signupForm,
  newListForm,
});
// the keys in my redux store ^
