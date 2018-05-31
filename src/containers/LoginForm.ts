import { connect } from "react-redux";

import LoginForm from "../components/LoginForm";
import { loginChange, passwordChange, submit } from "./../actions/loginForm";

const mapState = state => ({
  error: state.login.error,
  login: state.login.login,
  password: state.login.password
});

const mapDispatch = {
  loginChange,
  passwordChange,
  submit
};

export default connect(mapState, mapDispatch)(LoginForm);
