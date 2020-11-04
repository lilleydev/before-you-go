import React from "react";
import Router from "./Router";
import CoursesContainer from "./CoursesContainer";

const App = () => {
  return (
    <div>
      Hello World From App Class
      <CoursesContainer />,
      <Router />
    </div>
  );
};

export default App;
