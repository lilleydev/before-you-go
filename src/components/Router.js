import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import CoursesList from "./CoursesList";
import About from "../components/About";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Signup from "./Signup";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={Signup} />

      <Route path="/courses" component={CoursesList} />
    </Switch>
  );
};

export default Router;
