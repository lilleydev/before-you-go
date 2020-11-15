import { connect } from "react-redux";
import { deleteCourse } from "../actions/coursesActions";

const CoursesList = ({ courses, deleteCourse }) => {
  // const courseInfo = courses.data;
  // debugger;
  return (
    <div id="main">
      <div class="inner">
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
                      <h3>{course.attributes.difficulty}</h3>
                      <p>
                        {course.attributes.street} - {course.attributes.city} -{" "}
                        {course.attributes.state}
                      </p>
                      <button onClick={() => deleteCourse(course)}>
                        Delete
                      </button>
                    </li>
                  </article>
                ))}
              </>
            ) : (
              "there are no courses"
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { courses: state.courses };
};

export default connect(mapStateToProps, { deleteCourse })(CoursesList);
