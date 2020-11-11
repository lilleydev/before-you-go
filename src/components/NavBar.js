import React from "react";
// import Login from "./Login";
// import Logout from "./Logout";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        {currentUser ? <p>What's up {currentUser.attributes.name}!!</p> : ""}
        {currentUser ? (
          <>
            <NavLink exact activeClass to="/logout" className="brand-logo">
              Logout |
            </NavLink>
            <NavLink exact activeClass to="/" className="brand-logo">
              Home |
            </NavLink>

            <NavLink exact activeClass to="/about" className="brand-logo">
              About |
            </NavLink>
            <NavLink exact activeClass to="/bucketlist" className="brand-logo">
              Gotta Do! |
            </NavLink>
            <NavLink
              exact
              activeClass
              to="/bucketlist/new"
              className="brand-logo"
            >
              Add to My List |
            </NavLink>
            <NavLink exact activeClass to="/courses" className="brand-logo">
              Courses |
            </NavLink>
          </>
        ) : null}
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
