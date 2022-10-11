import React, { useState, useEffect, useReducer, useContext, useRef } from "react";
import { loginFormReducer } from "../../reducers/loginFormReducer.js";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context.js";
import InputControl from "../UI/Input/InputControl.js";

const Login = (props) => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const ctx = useContext(AuthContext);
  console.log("RENDERING LOGIN COMPONENT");
  const [formState, dispatchForm] = useReducer(loginFormReducer, {
    email: "",
    password: "",
    passwordIsValid: null,
    emailIsValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const { passwordIsValid, emailIsValid } = formState;
  useEffect(() => {
    const interval = setTimeout(() => {
      console.log("Setting form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 600);

    return () => {
      console.log("CLEANUP");
      clearTimeout(interval);
    };
  }, [passwordIsValid, emailIsValid]);
  const emailChangeHandler = (event) => {
    dispatchForm({ type: "USER_INPUT_EMAIL", value: event.target.value });
    // setEnteredEmail(event.target.value);
    // setFormIsValid(event.target.value.includes("@") && enteredPassword.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "USER_INPUT_PWD", value: event.target.value });

    // setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes("@"));
  };

  const validateEmailHandler = () => {
    // dispatchForm({ type: "INPUT_BLUR_EMAIL" });
  };

  const validatePasswordHandler = () => {
    // dispatchForm({ type: "INPUT_BLUR_PWD" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(formState.email, formState.password);
    } else if (!formState.emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputControl
          ref={emailRef}
          label="E-Mail"
          type="email"
          id="email"
          value={formState.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={formState.emailIsValid}
        ></InputControl>
        <InputControl
          ref={passwordRef}
          label="Password"
          type="password"
          id="password"
          value={formState.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={formState.passwordIsValid}
        ></InputControl>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
