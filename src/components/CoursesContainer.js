import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../actions/coursesActions";
import { fetchBreweries } from "../actions/beerAction";
import CoursesForm from "./CoursesForm";

class CoursesContainer extends Component {
  componentDidMount() {
    this.props.fetchCourses();
    this.props.fetchBreweries();
  }
  render() {
    return (
      <div>
        <h3>Hello From Courses Container</h3>
        <CoursesForm />
      </div>
    );
  }
}

export default connect(null, { fetchCourses, fetchBreweries })(
  CoursesContainer
);
