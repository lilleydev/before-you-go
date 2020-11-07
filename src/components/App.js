import React from "react";
import Router from "./Router";
import CoursesContainer from "./CoursesContainer";
import Login from "./Login";
import Logout from "./Logout";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        ({this.props.currentUser ? <Logout /> : <Login />}), Hello World From
        App Class
        <CoursesContainer />,
        <Router />
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
