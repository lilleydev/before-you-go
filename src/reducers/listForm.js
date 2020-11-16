const initialState = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
};

export const listForm = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LIST_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value,
      };
      return returnVal;
    case "RESET_LIST_FORM":
      return initialState;
    case "SET_FORM_DATA_FOR_EDIT":
      return action.listFormData;
    default:
      return state;
  }
};
