import React from "react";
import { connect } from "react-redux";
import { updateListForm } from "../actions/newListForm";
import { createList } from "../actions/lists";

const NewListForm = ({ formData, history, updateListForm, createList }) => {
  const { name, description, startDate, endDate } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateListForm(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createList(formData, history);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Where to go?"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <br />
      <label>Description:</label>
      <input
        placeholder="Describe here..."
        name="description"
        value={description}
        onChange={handleChange}
      />
      <br />
      <label>Starting:</label>
      <input
        placeholder="start date here"
        name="start_date"
        value={startDate}
        onChange={handleChange}
      />
      <br />
      <label>Ending:</label>
      <input
        placeholder="end date here"
        name="end_date"
        value={endDate}
        onChange={handleChange}
      />
      <br />

      <input type="submit" value="Create  List" />
      <br />
    </form>
  );
};

//state.reducerName
const mapStateToProps = (state) => {
  // const { name, description, startDate, endDate } = state.newListForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    formData: state.newListForm,
    userId,
  };
};
export default connect(mapStateToProps, { updateListForm, createList })(
  NewListForm
);
