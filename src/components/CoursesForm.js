import React, { Component } from "react";
import { addCourse } from "../actions/coursesActions";
import { connect } from "react-redux";

class CoursesForm extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    state: "",
    difficulty: "",
    mixed_use_park: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    debugger;
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <br />

        <label>Street:</label>
        <input
          type="text"
          value={this.state.street}
          name="street"
          onChange={this.handleChange}
        />
        <br />

        <label>City:</label>
        <input
          type="text"
          value={this.state.city}
          name="city"
          onChange={this.handleChange}
        />
        <br />

        <label>State:</label>
        <input
          type="text"
          value={this.state.state}
          name="state"
          onChange={this.handleChange}
        />
        <br />

        <label>Difficulty (1-10):</label>
        <input
          type="integer"
          value={this.state.difficulty}
          name="difficulty"
          onChange={this.handleChange}
        />
        <br />

        <label>Course within regular park?</label>
        <input
          type="boolean"
          value={this.state.mixed_use_park}
          name="mixed_use_park"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default connect(null, { addCourse })(CoursesForm);
