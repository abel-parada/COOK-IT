import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import "../styles/formStyle.css";
import Headerone from "../components/Headerone";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [formState, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    /*
    the is the place where we connect backend api
     to send the data to the database
      */
  };
  return (
    <div className="signin-container">
      <Headerone />
      <main className="main-container">
        <SignInForm formHandler={handleChange} submit={handleSubmit} />
      </main>
    </div>
  );
};

export default SignIn;
