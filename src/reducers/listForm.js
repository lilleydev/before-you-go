const initalState = { name: "", description: "", stateDate: "", endDate: "" };

export const listForm = (state = initalState, action) => {
  switch (action.type) {
    case "UPDATE_LIST_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    case "RESET_LIST_FORM":
      return initalState;
    default:
      return state;
  }
};
