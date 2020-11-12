const initalState = { name: "", items: "" };

export const newListForm = (state = initalState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_LIST_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    case "RESET_NEW_LIST_FORM":
      return initalState;
    default:
      return state;
  }
};
