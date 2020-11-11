// sync
export const updateListForm = (name, value) => {
  const formData = { name, value };
  return {
    type: "UPDATE_NEW_BUCKET_LIST_FORM",
    formData,
  };
};
