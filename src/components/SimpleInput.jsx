import { useEffect, useRef, useState } from "react";
import { useInput } from "@hooks";

const SimpleInput = (props) => {
  const isMounted = useRef(false);
  const validateEmail = (value) => ["@", "."].every((x) => value.includes(x));
  const validateName = (value) => value.trim() !== "";
  const [formIsValid, setFormIsValid] = useState(null);
  const {
    value: enteredName,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    validateValue: validateNameValue,
    resetInput: resetName,
  } = useInput(validateName);
  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    validateValue: validateEmailValue,
    resetInput: resetEmail,
  } = useInput(validateEmail);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    let chk1 = validateNameValue();
    let chk2 = validateEmailValue();
    // emailBlurHandler();
    if (chk1 && chk2) {
      console.log("form has been submittted", enteredName, enteredEmail);
      resetName();
      resetEmail();
    } else {
      setFormIsValid(false);
    }
  };
  useEffect(() => {
    if (isMounted.current) setFormIsValid(!emailHasError && !nameHasError);
    else isMounted.current = true;
  }, [emailHasError, nameHasError]);

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
