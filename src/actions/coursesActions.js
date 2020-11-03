export const fetchCourses = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/courses")
      .then((resp) => resp.json())
      .then((courses) => console.log("get courses", courses));
  };
};
