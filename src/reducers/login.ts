const DEFAULT_STATE = {
  error: false,
  login: "",
  password: ""
};

const login = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_CHANGE":
      return { ...state, login: action.login };
    case "PASSWORD_CHANGE":
      return { ...state, password: action.password };
    case "LOGIN":
      return { ...state, error: false };
    case "LOGIN_ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};

export default login;
