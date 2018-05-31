export const loginChange = login => ({
  login,
  type: "LOGIN_CHANGE"
});

export const passwordChange = password => ({
  password,
  type: "PASSWORD_CHANGE"
});

export const submit = (login, password) => ({
  login,
  password,
  type: "LOGIN"
});

export const loginError = () => ({
  type: "LOGIN_ERROR"
});
