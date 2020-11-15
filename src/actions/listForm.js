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
