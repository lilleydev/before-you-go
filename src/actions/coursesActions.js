import { resetCourseForm } from "../actions/courseForm";

export const addNewCourse = (course) => {
  return {
    type: "ADD_COURSE",
    course,
  };
};

export const setCourses = (courses) => {
  return {
    type: "SET_COURSES",
    courses,
  };
};

export const fetchCourses = () => {
  return (dispatch) => {
    return (
      fetch("http://localhost:3000/api/v1/courses", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        // .then((data) => console.log(data));
        .then((resp) => {
          console.log(resp);
          if (resp.error) {
            alert(resp.error);
          } else {
            dispatch(setCourses(resp.data));
          }
        })
        .catch(console.log)
    );
  };
};

export const addCourse = (course, history) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/courses", {
      method: "POST",
      body: JSON.stringify(course),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((course) => {
        dispatch(addNewCourse(course.data));
        dispatch(resetCourseForm());
        history.push("/courses");
      });
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

// export const addCourseToList = (course) => {
//   return dispatch => {
//     fetch("http://.localhost:3000/api/v1/")
//   }
// }
