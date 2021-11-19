import React, { Component } from "react";
import SignInForm from "../components/SignInForm";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    popup: false,
  };
  formHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="signin-container">
        <SignInForm formHandler={this.formHandler} />
      </div>
    );
  }
}

export default SignIn;
