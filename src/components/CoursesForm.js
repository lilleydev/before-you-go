import React, { Component } from "react";

export default class CoursesForm extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    state: "",
    difficulty: "",
    mixed_use_park: false,
  };
  render() {
    return (
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <label>Street:</label>

        <input
          type="text"
          value={this.state.street}
          name="street"
          onChange={this.handleChange}
        />
        <label>City:</label>

        <input
          type="text"
          value={this.state.city}
          name="city"
          onChange={this.handleChange}
        />
        <label>State:</label>

        <input
          type="text"
          value={this.state.state}
          name="state"
          onChange={this.handleChange}
        />
        <label>Difficulty (1-10):</label>

        <input
          type="integer"
          value={this.state.difficulty}
          name="difficulty"
          onChange={this.handleChange}
        />
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
