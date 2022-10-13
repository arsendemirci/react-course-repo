import { useEffect, useRef, useState, useCallback } from "react";

const SimpleInput = (props) => {
  const isMounted = useRef(false);
  const [validation, setValidation] = useState({
    name: {},
    email: {},
    isValid: null,
    message: "",
  });
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const validateForm = useCallback(
    (blur) => {
      let validationObj = {};
      if (blur) {
        if (blur === "name") {
          validationObj.name = {
            isValid: enteredName !== "",
            message: "Please Enter a Name",
          };
        } else if (blur === "email") {
          validationObj.email = {
            isValid:
              enteredEmail !== "" && ["@", "."].every((x) => enteredEmail.includes(x)),
            message: "Please Enter Valid Email",
          };
        }
      } else {
        validationObj.name = {
          isValid: enteredName !== "",
          message: "Please Enter a Name",
        };
        validationObj.email = {
          isValid:
            enteredEmail !== "" && ["@", "."].every((x) => enteredEmail.includes(x)),
          message: "Please Enter Valid Email",
        };
        validationObj.isValid = !Object.values(validationObj).some((x) => !x.isValid);
        validationObj.message = validationObj.isValid ? "" : "The Form Is Not Valid!";
      }

      setValidation((prev) => {
        return { ...prev, ...validationObj };
      });
    },
    [enteredName, enteredEmail]
  );
  const inputChangeHandler = (event, type) => {
    if (type === "name") {
      setEnteredName(event.target.value);
    } else if (type === "email") {
      setEnteredEmail(event.target.value);
    } else {
      return;
    }
  };
  const inputBlurHandler = (type) => {
    validateForm(type);
  };
  const formSubmissinHandler = (event) => {
    event.preventDefault();
    validateForm();
    if (!validation.isValid) return;
    console.log("Submitted the form", enteredName, enteredEmail);

    //we change isMounted to false to reset the form and skip the next useEffect
    isMounted.current = false;
    setEnteredName("");
    setEnteredEmail("");
  };
  const nameInputClasses =
    validation.name.isValid === false ? "form-control invalid" : "form-control";
  const emailInputClasses =
    validation.email.isValid === false ? "form-control invalid" : "form-control";
  useEffect(() => {
    if (isMounted.current) validateForm();
    else {
      isMounted.current = true;
    }
  }, [validateForm]);
  return (
    <form onSubmit={formSubmissinHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your First Name</label>
        <input
          type="text"
          id="name"
          onChange={(event) => inputChangeHandler(event, "name")}
          onBlur={() => inputBlurHandler("name")}
          value={enteredName}
        />
        {validation.name.isValid === false && (
          <p className="error-text">{validation.name.message}</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="text"
          onChange={(event) => inputChangeHandler(event, "email")}
          onBlur={() => inputBlurHandler("email")}
          value={enteredEmail}
        ></input>
        {validation.email.isValid === false && (
          <p className="error-text">{validation.email.message}</p>
        )}
      </div>
      <div className="form-actions">
        <div className="validation-alert">
          {validation.isValid === false && validation.message}
        </div>

        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
