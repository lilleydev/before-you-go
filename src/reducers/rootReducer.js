import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { usersReducer } from "./usersReducer";
import { beerReducer } from "./beerReducer";
import { currentUserReducer } from "./currentUserReducer";
import { loginForm } from "./loginFormReducer";
import { bucketLists } from "./bucketListsReducer";
import { signupForm } from "./signupForm";
import { newBucketListForm } from "./newBucketListForm";

export const rootReducer = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  beers: beerReducer,
  currentUser: currentUserReducer,
  loginForm,
  bucketLists,
  signupForm,
  newBucketListForm,
});
