import { connect } from "react-redux";
import { deleteCourse } from "../actions/coursesActions";

const CoursesList = ({ courses }) => {
  // debugger;
  handleClick = (event) => {
    debugger;
    console.log(event);
  };

  return (
    <div>
      {courses.map((course) => (
        <ul>
          <li key={course.id}>
            {course.name} - {course.street} - {course.city} - {course.state} -
            {course.difficulty} - {course.mixed_use_park} -
            <button onClick={this.handleClick}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { courses: state.courses };
};

export default connect(mapStateToProps)(CoursesList);
