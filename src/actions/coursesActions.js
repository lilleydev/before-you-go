export const fetchCourses = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/courses")
      .then((resp) => resp.json())
      // .then((data) => console.log(data));
      .then((courses) =>
        dispatch({ type: "FETCH_COURSES", payload: courses.data })
      );
  };
};

export const addCourse = (course) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/courses", {
      method: "POST",
      body: JSON.stringify(course),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((course) => dispatch({ type: "ADD_COURSE", payload: course.data }));
  };
};

export const deleteCourse = (course) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/courses/" + course.id, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((course) => dispatch({ type: "DELETE_COURSE", payload: course }));
  };
};
