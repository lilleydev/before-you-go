import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../actions/coursesActions";
import { fetchBreweries } from "../actions/beerAction";
import CoursesList from "./CoursesList";

class CoursesContainer extends Component {
  componentDidMount() {
    this.props.fetchCourses();
    this.props.fetchBreweries();
  }
  render() {
    return (
      <div>
        <CoursesList />
      </div>
    );
  }
}

export default connect(null, { fetchCourses, fetchBreweries })(
  CoursesContainer
);
