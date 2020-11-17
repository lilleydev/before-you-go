const initialState = {
  name: "",
  street: "",
  city: "",
  state: "",
  difficulty: "",
  mixed_use_park: false,
};

export const courseForm = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "UPDATE_COURSE_FORM":
      console.log("from courseForm Reducer, action is", action);
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    case "RESET_COURSE_FORM":
      return initialState;
    default:
      return state;
  }
};
