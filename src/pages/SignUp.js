import React, { useState } from "react";
import Headerone from "../components/Headerone";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
    <div className="signup-container">
      <Headerone />
      <main className="main-container">
        <SignUpForm formHandler={handleChange} submit={handleSubmit} />
      </main>
    </div>
  );
};

export default SignUp;
