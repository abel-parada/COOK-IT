import React from "react";
import { NavLink } from "react-router-dom";

//onSubmit check all form input before sending and collect data
const SignUpForm = (props) => {
  console.log(props);
  return (
    <div className="inner-container">
      <form>
        <NavLink to="/SignIn" className="signIn">
          Sign In
        </NavLink>
        <div className="form-field">
          <h2>JOIN WITH US</h2>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            onChange={props.formHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={props.formHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={props.formHandler}
          />
        </div>{" "}
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={props.formHandler}
          />
        </div>
        <input type="submit" value="send" />
      </form>
      <div class="right-container">
        <h2>LET'S GET STARTED!</h2>
        <h3>Join with us for .....</h3>
      </div>
    </div>
  );
};

export default SignUpForm;
