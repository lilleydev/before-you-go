import React from "react";
import Router from "./Router";
import CoursesContainer from "./CoursesContainer";
import Login from "./Login";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        Hello World From App Class
        <CoursesContainer />,
        <Login />,
        <Router />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
