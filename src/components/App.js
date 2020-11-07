import React from "react";
import Router from "./Router";
import CoursesContainer from "./CoursesContainer";
import Login from "./Login";

class App extends React.Component {
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

export default App;
