import React from "react";
import { connect } from "react-redux";

const Login = ({ username, password }) => {
  return (
    <form onSubmit={undefined}>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={undefined}
        value={username}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={undefined}
        value={password}
      />
      <input type="submit" value="Log In" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
