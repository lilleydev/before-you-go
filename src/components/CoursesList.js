import { connect } from "react-redux";
import { deleteCourse } from "../actions/coursesActions";

const CoursesList = ({ courses, deleteCourse, history }) => {
  // const courseInfo = courses.data;
  // debugger;
  return (
    <section>
      <header class="major">
        <h2>Courses in this locale</h2>
      </header>
      <div class="posts">
        {courses ? (
          <>
            {courses.map((course) => (
              <article>
                <li key={course.id}>
                  <h2>{course.attributes.name}</h2>
                  <h3>Difficulty Level: {course.attributes.difficulty}</h3>
                  <p>{course.attributes.street}</p>
                  <p>
                    {course.attributes.city}, {course.attributes.state}
                  </p>
                  <button onClick={() => deleteCourse(course, history)}>
                    Delete
                  </button>
                  {/* <button onClick={() => addCourseToList(course)}>
                        Play This!
                      </button> */}
                </li>
              </article>
            ))}
          </>
        ) : (
          "there are no courses"
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { courses: state.courses };
};

export default connect(mapStateToProps, { deleteCourse })(CoursesList);
