export const fetchCourses = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/courses")
      .then((resp) => resp.json())
      .then((courses) => dispatch({ type: "FETCH_COURSES", payload: courses }));
  };
};

export const addCourse = (course) => {
  return (dispatch) => {
    fetch("http://localhost:3000/courses", {
      method: "POST",
      body: JSON.stringify(course),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((course) => dispatch({ type: "ADD_COURSE", payload: course }));
  };
};

export const deleteCourse = (course) => {
  return (dispatch) => {
    fetch("http://localhost:3000/courses", {
      method: "DELETE",
      body: JSON.stringify(course),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((course) => dispatch({ type: "DELETE_COURSE", payload: course }));
  };
};
