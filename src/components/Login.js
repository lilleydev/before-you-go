import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

const Login = ({ loginForm, updateLoginForm, login, history }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    const formInfo = { ...loginForm, [name]: value };
    updateLoginForm(formInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginForm, history);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
        value={loginForm.username}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={handleChange}
        value={loginForm.password}
      />
      <input type="submit" value="Log In" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
