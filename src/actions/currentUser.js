import { resetLoginForm } from "./loginForm";
import { getMyBucketLists } from "./bucketLists";
import { clearLists } from "./bucketLists";

//sync
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user: user,
  };
};

//async
export const login = (credentials, history) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user.data));
          dispatch(getMyBucketLists());
          dispatch(resetLoginForm());
          history.push("/about");
        }
      })
      .catch(console.log);
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user.data));
          dispatch(getMyBucketLists());
        }
      })
      .catch(console.log);
  };
};

export const signup = (credentials, history) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user.data));
          dispatch(getMyBucketLists());
          dispatch(resetLoginForm());
          history.push("/about");
        }
      })
      .catch(console.log);
  };
};

//clear session
export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser());
    dispatch(clearLists());
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE",
    });
  };
};

//clear user
export const clearCurrentUser = (user) => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};
