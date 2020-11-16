import React from "react";
import Router from "./Router";
import NavBar from "./NavBar";

import { connect } from "react-redux";
import { getCurrentUser } from "../actions/currentUser";
import "../App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <div class="inner">
            <section>
              <Router />
            </section>
          </div>
        </div>
        <div id="sidebar">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
