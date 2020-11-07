import React from "react";
import Router from "./Router";
import CoursesContainer from "./CoursesContainer";
import Login from "./Login";

const App = () => {
  return (
    <div>
      Hello World From App Class
      <CoursesContainer />,
      <Login />,
      <Router />
    </div>
  );
};

export default App;
