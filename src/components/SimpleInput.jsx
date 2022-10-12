import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissinHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(nameInputRef.current.value);

    // nameInputRef.current.value = ''; => NOT IDEAL,DON'T MANIPULATE THE DOM
    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmissinHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
