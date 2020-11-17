import React from "react";
import { connect } from "react-redux";

import { addCourse, updateCourseForm } from "../actions/coursesActions";

const CoursesForm = ({ addCourse, history, formData }) => {
  const { name, street, city, state, difficulty, mixed_use_park } = formData;

  const handleChange = (event) => {
    const { name, value } = eventtarget;
    updateCourseForm(name, value);
  };

  const handleSubmit = (event) => {
    eventpreventDefault();
    addCourse(...formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        placeholder="name of course"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <br />

      <label>Street:</label>
      <input
        placeholder="street address"
        value={street}
        name="street"
        onChange={handleChange}
      />
      <br />

      <label>City:</label>
      <input
        placeholder="city"
        value={city}
        name="city"
        onChange={handleChange}
      />
      <br />

      <label>State:</label>
      <input
        placeholder="state"
        value={state}
        name=""
        onChange={handleChange}
      />
      <br />

      <label>Difficulty (1-10):</label>
      <input
        type="integer"
        placeholder="rate from 1 - 10"
        value={difficulty}
        name="difficulty"
        onChange={handleChange}
      />
      <br />

      <label>Course within regular park?</label>
      <input
        type="boolean"
        value={mixed_use_park}
        name="mixed_use_park"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default connect(null, { addCourse, updateCourseForm })(CoursesForm);
