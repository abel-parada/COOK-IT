import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

//onSubmit check all form input before sending and collect data
const SignInForm = (props) => {
  console.log(props);
  return (
    <div className="inner-container">
      <form>
        <NavLink className="signUp" to="/SignUp">
          Sign Up
        </NavLink>

        <div className="form-field">
          <h2>LOGIN FORM</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email"
            required
            onChange={props.formHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="your password"
            onChange={props.formHandler}
          />
        </div>
        <input type="submit" value="send" />
      </form>
      <div className="right-container">
        <h2>WELCOME BACK</h2>
        <h3>CookIt is ....</h3>
        <div className="social-site">
          <button>
            Join us with
            <FaFacebook color="#734062" size="0.5rem" className="icon" />
          </button>
          <button>
            Join us with
            <FaGooglePlus color="#734062" size="1rem" className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
