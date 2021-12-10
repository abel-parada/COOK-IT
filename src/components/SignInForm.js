import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

const SignInForm = (props) => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="inner-container signin-inContainer">
      <form onSubmit={props.submit}>
        <div className="form-field">
          <h2>LOGIN FORM</h2>
          <label htmlFor="email">Email</label>
          <span class="input-item">
            <i class="fa fa-user-circle"></i>
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="@email"
            required
            onChange={props.formHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <span class="input-item">
            <i class="fa fa-key"></i>
          </span>
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
      <div className="right-container">
        <h2>WELCOME BACK</h2>
        <h3>To Keep connected with us please login with your personal info</h3>
        <div className="social-site">
          <button className="fb-button">
            Join us with
            <FaFacebook color="#734062" size="0.5rem" className="icon" />
          </button>
          <button className="gogl-button">
            Join us with
            <FaGooglePlus color="#734062" size="1rem" className="icon" />
          </button>
          {/* <FacebookLogin
            appId=""
            autoLoad
            callback={responseFacebook}
            render={(renderProps) => (
              <button className="fb-button" onClick={renderProps.onClick}>
                Join us with
                <FaFacebook color="#734062" size="0.5rem" className="icon" />
              </button>
            )}
          />
          <GoogleLogin
            clientId=""
            render={(renderProps) => (
              <button
                className="gogl-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Join us with
                <FaGooglePlus color="#734062" size="1rem" className="icon" />
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
          <p className="text-sm mt-4">
            Dont have an account?
            <NavLink className="signUp" to="/SignUp">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
