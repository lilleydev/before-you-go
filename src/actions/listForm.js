// sync
export const updateListForm = (name, value) => {
  const formData = { name, value };
  // console.log("actions", formData);
  return {
    type: "UPDATE_LIST_FORM",
    formData,
  };
};

export const resetListForm = () => {
  return {
    type: "RESET_LIST_FORM",
  };
};

export const setFormDataForEdit = (list) => {
  // debugger;
  const listFormData = {
    name: list.attributes.name,
    startDate: list.attributes.start_date,
    endDate: list.attributes.end_date,
    description: list.attributes.description,
  };
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    listFormData,
  };
};
