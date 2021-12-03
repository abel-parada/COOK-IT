import React from "react";
import { NavLink } from "react-router-dom";

//onSubmit check all form input before sending and collect data
const SignInForm = (props) => {
  console.log(props);
  return (
    <form>
      <NavLink className="signUp" to="/SignUp">
        Sign Up
      </NavLink>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={props.formHandler}
        ></input>
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={props.formHandler}
        ></input>
      </div>
      <input type="submit" value="send"></input>
    </form>
  );
};

export default SignInForm;
