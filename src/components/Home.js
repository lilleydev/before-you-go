import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> Welcome to Before You Go!</h1>
      <h2>
        <Link to="/signup" className="brand-logo">
          Sign Up
        </Link>
        or
        <Link to="/login" className="brand-logo">
          Login
        </Link>
      </h2>
    </div>
  );
};

export default Home;
