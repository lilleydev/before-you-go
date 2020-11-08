import { connect } from "react-redux";
import { deleteCourse } from "../actions/coursesActions";
import CoursesContainer from "./CoursesContainer";

const CoursesList = ({ courses, deleteCourse }) => {
  // const courseInfo = courses.data;
  // debugger;
  return (
    <div>
      {courses ? (
        <>
          {courses.map((course) => (
            <ul>
              <li key={course.id}>
                {course.attributes.name} - {course.attributes.street} -{" "}
                {course.attributes.city} - {course.attributes.state} -
                {course.attributes.difficulty} -
                <button onClick={() => deleteCourse(course)}>Delete</button>
              </li>
            </ul>
          ))}
        </>
      ) : (
        "there are no courses"
      )}
      <CoursesContainer />,
    </div>
  );
};

const mapStateToProps = (state) => {
  return { courses: state.courses };
};

export default connect(mapStateToProps, { deleteCourse })(CoursesList);
