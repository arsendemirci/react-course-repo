const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { ...state, value: action.value };
  } else if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  } else if (action.type === "VALIDATE") {
    return { value: state.value, isTouched: true, isValid: action.valid };
  } else if (action.type === "RESET") {
    return { value: "", isTouched: false, isValid: false };
  } else {
    return state;
  }
};

export default inputStateReducer;
