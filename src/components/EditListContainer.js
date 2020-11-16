import React from "react";
import { resetListForm, setFormDataForEdit } from "../actions/listForm";
import { updateList } from "../actions/lists";
import { connect } from "react-redux";
import ListForm from "./ListForm";

class EditListContainer extends React.Component {
  componentDidMount() {
    console.log("didMount", this.props.list);
    this.props.list && this.props.setFormDataForEdit(this.props.list);
  }

  handleSubmit = (event, formData, history) => {
    const { updateList, list } = this.props;
    // console.log("list is", list);
    event.preventDefault();
    updateList({ ...formData, list }, history);
  };

  render() {
    return (
      <div>
        <ListForm
          editMode
          history={this.history}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { updateList, setFormDataForEdit })(
  EditListContainer
);
