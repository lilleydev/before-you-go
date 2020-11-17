export const updateCourseForm = (name, value) => {
  const formData = { name, value };
  console.log("from courses actions, formData is", formData);
  return {
    type: "UPDATE_COURSE_FORM",
    formData,
  };
};

export const resetCourseForm = () => {
  return {
    type: "RESET_COURSE_FORM",
  };
};
