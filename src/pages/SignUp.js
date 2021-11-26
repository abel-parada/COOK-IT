import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import cook from "../images/cook.jpg";

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
        <header>
          <h1>Cook IT</h1>
        </header>
        <main>
          <img
            src={cook}
            alt="Food"
            width="500"
            height="400"
            className="formImg"
          />
          <SignUpForm formHandler={this.formHandler} />
        </main>
      </div>
    );
  }
}

export default SignUp;
