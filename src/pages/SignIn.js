import React, { Component } from "react";
import SignInForm from "../components/SignInForm";
import Footer from "../components/Footer";
import "../styles/formStyle.css";
import Headerone from "../components/Headerone";

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
  onSubmit = (e) => {
    /* 
     e.preventDefault()
      stops the default behavior of form element
     specifically refreshing of page
     */
    e.preventDefault();

    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
  };
  render() {
    return (
      <div className="signin-container">
        <Headerone />
        <main className="main-container">
          <SignInForm formHandler={this.formHandler} submit={this.onSubmit} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
