import React from "react";
import { createList } from "../actions/lists";
import { connect } from "react-redux";
import ListForm from "./ListForm";

const NewListContainer = ({ history, createList }) => {
  const handleSubmit = (event, formData, history) => {
    event.preventDefault();
    createList({ ...formData }, history);
  };
  return (
    <div>
      <ListForm history={history} handleSubmit={handleSubmit} />
    </div>
  );
};

export default connect(null, { createList })(NewListContainer);
