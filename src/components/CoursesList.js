import { connect } from "react-redux";
import { deleteCourse } from "../actions/coursesActions";

const CoursesList = ({ courses }) => {
  // debugger;
  handleOnClick = () => {
    debugger;
    this.props.deleteCourse(this.props.id);
  };

  return (
    <div>
      {courses.map((course) => (
        <ul>
          <li key={course.id}>
            {course.name} - {course.street} - {course.city} - {course.state} -
            {course.difficulty} - {course.mixed_use_park} -{" "}
            <button onClick={this.handleOnClick}>Delete</button>
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
