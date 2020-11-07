import React from "react";
import Router from "./Router";
import NavBar from "./NavBar";

import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        <NavBar />
        App Class
        <Router />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
