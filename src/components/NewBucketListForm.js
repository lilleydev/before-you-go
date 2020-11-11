import React from "react";
import { connect } from "react-redux";
import { updateListForm } from "../actions/newListForm";

const NewBucketListForm = ({
  formData,
  history,
  updateListForm,
  handleSubmit,
}) => {
  const { name, items } = formData;

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
      <label>Wanna check out:</label>
      <input
        placeholder="What to see??"
        name="items"
        value={items}
        onChange={handleChange}
      />
      <br />

      <input type="submit" value="Create Bucket List" />
      <br />
    </form>
  );
};

//state.reducerName
const mapStateToProps = (state) => {
  // const { name, items } = state.newBucketListForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    formData: state.newBucketListForm,
    userId,
  };
};
export default connect(mapStateToProps, { updateListForm })(NewBucketListForm);
