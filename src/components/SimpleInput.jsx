import { useEffect, useRef, useState, useCallback } from "react";

const SimpleInput = (props) => {
  const isMounted = useRef(false);
  const [validation, setValidation] = useState({
    name: {},
    surname: {},
    isValid: null,
    message: "",
  });
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const validateForm = useCallback(() => {
    let validationObj = {};

    validationObj.name = { isValid: enteredName !== "", message: "Please Enter a Name" };
    validationObj.surname = {
      isValid: enteredSurname !== "",
      message: "Please Enter Surname",
    };

    validationObj.isValid = !Object.values(validationObj).some((x) => !x.isValid);

    validationObj.message = validationObj.isValid ? "" : "The Form Is Not Valid!";

    setValidation(validationObj);
  }, [enteredName, enteredSurname]);
  const nameInputChangeHandler = (event, type) => {
    console.log("event", event, "param", type);
    if (type === "name") {
      setEnteredName(event.target.value);
    } else if (type === "surname") {
      setEnteredSurname(event.target.value);
    } else {
      return;
    }
  };
  const formSubmissinHandler = (event) => {
    event.preventDefault();
    validateForm();
    if (!validation.isValid) return;
    console.log("Submitted the form", enteredName, enteredSurname);

    //we change isMounted to false to reset the form and skip the next useEffect
    isMounted.current = false;
    setEnteredName("");
    setEnteredSurname("");
  };
  const nameInputClasses =
    validation.name.isValid === false ? "form-control invalid" : "form-control";
  const surnameInputClasses =
    validation.surname.isValid === false ? "form-control invalid" : "form-control";
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
          onChange={(event) => nameInputChangeHandler(event, "name")}
          value={enteredName}
        />
        {validation.name.isValid === false && (
          <p className="error-text">{validation.name.message}</p>
        )}
      </div>
      <div className={surnameInputClasses}>
        <label htmlFor="surname">Your Last Name</label>
        <input
          id="surname"
          type="text"
          onChange={(event) => nameInputChangeHandler(event, "surname")}
          value={enteredSurname}
        ></input>
        {validation.surname.isValid === false && (
          <p className="error-text">{validation.surname.message}</p>
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
