import { useReducer } from "react";
import { inputStateReducer } from "@reducers";

const useInput = (validate) => {
  const [state, dispatch] = useReducer(inputStateReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const validateValue = () => {
    const isItValid = validate(state.value);
    dispatch({ type: "VALIDATE", valid: isItValid });
    return isItValid;
  };
  const valueIsValid = validate(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };
  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };
  const resetInput = () => {
    dispatch({ type: "RESET" });
  };

  console.log("custom hook start", { ...state });
  return {
    value: state.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    validateValue,
    resetInput,
  };
};

export default useInput;
