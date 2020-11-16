import React from "react";
import { connect } from "react-redux";
import { updateListForm } from "../actions/listForm";

const ListForm = ({
  formData,
  history,
  updateListForm,
  handleSubmit,
  editMode,
}) => {
  const { name, description, startDate, endDate, list } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateListForm(name, value);
  };

  return (
    <div id="listForm">
      <form onSubmit={(event) => handleSubmit(event, formData, history)}>
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
          placeholder="start date YYYY-MM-DD"
          name="startDate"
          value={startDate}
          onChange={handleChange}
        />
        <br />
        <label>Ending:</label>
        <input
          placeholder="end date YYYY-MM-DD"
          name="endDate"
          value={endDate}
          onChange={handleChange}
        />
        <br />

        <input
          type="submit"
          value={editMode ? "Update Info" : "Create  List"}
        />
        <br />
      </form>
    </div>
  );
};

//state.reducerName
const mapStateToProps = (state) => {
  // const { name, description, startDate, endDate } = state.newListForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    formData: state.listForm,
    userId,
  };
};
export default connect(mapStateToProps, { updateListForm })(ListForm);
