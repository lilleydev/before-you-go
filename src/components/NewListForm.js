import React from "react";
import { connect } from "react-redux";
import { updateListForm } from "../actions/newListForm";

const NewListForm = ({ formData, history, updateListForm, handleSubmit }) => {
  const { name, description, start_date, end_date } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateListForm(name, value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(formData);
      }}
    >
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
      <label>Starting:</label>
      <input
        placeholder="start date here"
        name="start_date"
        value={start_date}
        onChange={handleChange}
      />
      <label>Ending:</label>
      <input
        placeholder="end date here"
        name="end_date"
        value={end_date}
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
  // const { name, items } = state.newListForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    formData: state.newListForm,
    userId,
  };
};
export default connect(mapStateToProps, { updateListForm })(NewListForm);
