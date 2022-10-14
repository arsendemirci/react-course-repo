import { useEffect, useRef, useState, useCallback } from "react";
import { useInput } from "@hooks";

const SimpleInput = (props) => {
  const isMounted = useRef(false);
  const validateEmail = (value) => ["@", "."].every((x) => value.includes(x));
  const validateName = (value) => value.trim() !== "";
  const [formIsValid, setFormIsValid] = useState(null);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(validateName);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(validateEmail);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      console.log("form has been submittted", enteredName, enteredEmail);
    } else {
      setFormIsValid(false);
    }
  };
  useEffect(() => {
    if (isMounted.current) setFormIsValid(enteredNameIsValid && enteredEmailIsValid);
    else isMounted.current = true;
  }, [enteredNameIsValid, enteredEmailIsValid]);
  const nameInputClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your First Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Please enter your name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="text"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        ></input>
        {emailHasError && <p className="error-text">Please enter a valid email!</p>}
      </div>
      <div className="form-actions">
        <div className="validation-alert">
          {formIsValid === false && "Form Is Not Valid"}
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
