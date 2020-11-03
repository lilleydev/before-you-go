import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../actions/coursesActions";

class CoursesContainer extends Component {
  render() {
    return (
      <div>
        <h3>Hello From Courses Container</h3>
      </div>
    );
  }
}

export default connect(null, { fetchCourses })(CoursesContainer);
