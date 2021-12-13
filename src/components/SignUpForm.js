import React from "react";
import { NavLink } from "react-router-dom";

//onSubmit check all form input before sending and collect data
const SignUpForm = (props) => {
  console.log(props);
  return (
    <div className="inner-container">
      <form onSubmit={props.submit}>
        <div className="form-field">
          <h2>JOIN WITH US</h2>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
            required
            onChange={props.formHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="lastname"
            onChange={props.formHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Username</label>
          <input
            type="Username"
            name="username"
            id="username"
            placeholder="username"
            onChange={props.formHandler}
          />
        </div>{" "}
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="@email"
            onChange={props.formHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={props.formHandler}
          />
        </div>
        <input type="submit" value="send" />
      </form>
      <div class="right-container">
        <h2 className="right-h2">Hello Friend!</h2>
        <h3>Enter your personal details and start journey with us.</h3>
        <p>Already have an account?</p>
        <NavLink to="/SignIn" className="signIn">
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default SignUpForm;
