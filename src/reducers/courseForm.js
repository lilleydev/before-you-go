const initialState = {
  name: "",
  street: "",
  city: "",
  state: "",
  difficulty: "",
  mixed_use_park: false,
};

export const courseForm = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COURSE_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value,
      };
      return returnVal;
    case "RESET_COURSE_FORM":
      return initialState;
    default:
      return state;
  }
};
