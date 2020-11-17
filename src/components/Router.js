import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Signup from "./Signup";
import MyLists from "./MyLists";
import ListCard from "./ListCard";
import { connect } from "react-redux";
import CoursesContainer from "./CoursesContainer";
import NewListContainer from "./NewListContainer";
import EditListContainer from "./EditListContainer";
import CoursesForm from "./CoursesForm";
const Router = ({ lists }) => {
  return (
    <Switch>
      <Route exact path="/" render={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/lists/new" component={NewListContainer} />
      <Route exact path="/courses/new" component={CoursesForm} />
      <Route exact path="/lists" component={MyLists} />
      <Route
        exact
        path="/lists/:id"
        render={(props) => {
          const list = lists.find((list) => list.id === props.match.params.id);
          console.log("my list", list);
          return <ListCard list={list} {...props} />;
        }}
      />
      <Route
        exact
        path="/lists/:id/edit"
        render={(props) => {
          const list = lists.find((list) => list.id === props.match.params.id);
          // console.log("from route, list", list);

          return <EditListContainer list={list} {...props} />;
        }}
      />
      <Route path="/courses" component={CoursesContainer} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};
export default connect(mapStateToProps)(Router);
