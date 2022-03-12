import React, { useState } from "react";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";
import axios from "axios";
import "../styles/popup.css";

import PopUp from "../components/PopUp";
const SignUp = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };
  // const postInitial = {
  //   recipe: "",
  //   photo: "",
  //   video: "",
  // };
  const [formState, setFormState] = useState(initialState);
  const [popup, setPopup] = useState(false);

  //[currentdata,function to update data]
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const popupHandler = (e) => {
    e.preventDefault();
    setPopup(true);
  };

  // sending data to databse and closing popup box
  const postHandler = (e) => {
    axios
      .post("/user", formState)
      .then((response) => {
        setPopup(false);
        //for closing

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <Nav />
      <main className="main-container">
        <SignUpForm formHandler={handleChange} submit={popupHandler} />
        {/* if popup state is true return Popup component otherwise do not show*/}
        {popup && <PopUp {...formState} postHandler={postHandler} />}
      </main>
    </div>
  );
};

export default SignUp;
