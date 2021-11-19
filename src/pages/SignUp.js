import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
    popup: false,
  };
  formHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="signup-container">
        <SignUpForm formHandler={this.formHandler} />
      </div>
    );
  }
}

export default SignUp;
