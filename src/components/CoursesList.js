import { connect } from "react-redux";

const CoursesList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <ul>
          <li key={course.id}>
            {course.name} - {course.street} - {course.city} - {course.state} -
            {course.difficulty} - {course.mixed_use_park} -
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
