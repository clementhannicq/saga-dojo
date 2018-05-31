import React, { SFC } from "react";

const LoginForm: SFC<any> = ({
  login,
  password,
  error,
  submit,
  loginChange,
  passwordChange
}) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      submit(login, password);
    }}
  >
    {error && <p>Login or password incorrect</p>}
    <input
      type="text"
      value={login}
      onChange={e => loginChange(e.target.value)}
    />
    <input
      type="password"
      value={password}
      onChange={e => passwordChange(e.target.value)}
    />
    <button>Submit</button>
  </form>
);

export default LoginForm as any;
