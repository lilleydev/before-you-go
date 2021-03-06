import React from "react";
// import Login from "./Login";
// import Logout from "./Logout";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <div className="inner">
      <nav id="menu">
        <header className="major">
          {currentUser ? (
            <h2>What's up {currentUser.attributes.name}!!</h2>
          ) : (
            ""
          )}{" "}
        </header>
        {currentUser ? (
          <>
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/logout"
                  className="brand-logo"
                >
                  Logout |
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/"
                  className="brand-logo"
                >
                  Home |
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/about"
                  className="brand-logo"
                >
                  About |
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/lists">
                  Gotta Do! |
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/lists/new"
                  className="brand-logo"
                >
                  Add to My List |
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/courses"
                  className="brand-logo"
                >
                  Courses |
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/courses/new"
                  className="brand-logo"
                >
                  Add a Course |
                </NavLink>
              </li>
            </ul>
          </>
        ) : null}
      </nav>
    </div>
  );
};
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};
export default connect(mapStateToProps)(NavBar);
