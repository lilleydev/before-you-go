const initalState = { name: "", username: "", password: "" };

export const signupForm = (state = initalState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData;
    case "RESET_SIGNUP_FORM":
      return initalState;
    default:
      return state;
  }
};
