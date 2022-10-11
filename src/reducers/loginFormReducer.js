const loginFormReducer = (state, action) => {
  if (action.type === "USER_INPUT_EMAIL") {
    return { ...state, email: action.value, emailIsValid: ["@", "."].every((char) => action.value.includes(char)) };
  }
  if (action.type === "INPUT_BLUR_EMAIL") {
    return state;
  }
  if (action.type === "USER_INPUT_PWD") {
    return { ...state, password: action.value, passwordIsValid: action.value.length > 6 };
  }
  if (action.type === "INPUT_BLUR_PWD") {
    return state;
  }
};

export { loginFormReducer };
