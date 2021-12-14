import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

const SignInForm = (props) => {

 
  let dispatch = useDispatch()
  let navigate = useNavigate()

  

  // google login
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      console.log(token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.error("Google singin was not successfull. Try again!");
  };

  ///facebook login

  const responseFacebook = async (response) => {
    const name = response?.name;
    const token = response?.accessToken;
    try {
      dispatch({ type: "FAUTH", data: { name, token } });
      console.log(token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
    console.log(response);
  };

  return (
    <div className="inner-container signin-inContainer">
      <form onSubmit={props.submit}>
        <div className="form-field">
          <h2>LOGIN FORM</h2>
          <label htmlFor="username">UserName</label>
          <span class="input-item">
            <i class="fa fa-user-circle"></i>
          </span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
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
          {/* <button className="fb-button">
            Join us with
            <FaFacebook color="#734062" size="0.5rem" className="icon" />
          </button> */}

          {/* ///// */}
          <FacebookLogin
            appId="215201880647676"
            // autoLoad
            callback={responseFacebook}
            render={(renderProps) => (
              <button className="fb-button" onClick={renderProps.onClick}>
                Join us with
                <FaFacebook color="#734062" size="0.5rem" className="icon" />
              </button>
            )}
          />

          {/* ///// */}

          <GoogleLogin
            clientId="655288511165-8v2cmof3a4gfhftb02ufa763qech6u6i.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="gogl-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="contained"
              >
                {" "}
                Join us with
                <FaGooglePlus color="#734062" size="1rem" className="icon" />
              </button>
            )}
            buttonText="Login"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />

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
