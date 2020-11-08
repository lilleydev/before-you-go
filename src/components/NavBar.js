import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        {currentUser ? <p>What's up {currentUser.attributes.name}!!</p> : ""}
        {currentUser ? <Logout /> : <Login />}
        <Link to="/" className="brand-logo">
          Home
        </Link>
        <Link to="/about" className="brand-logo">
          About
        </Link>
        <Link to="/courses" className="brand-logo">
          Courses
        </Link>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};
export default connect(mapStateToProps)(NavBar);
