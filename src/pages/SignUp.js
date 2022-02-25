import React, { useState } from "react";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";
import axios from "axios";
import PopUp from "../components/PopUp";
import "../styles/popup.css";
const SignUp = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };
  const postInitial = {
    recipe: "",
    photo: "",
    video: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [popup, setPopup] = useState(false);
  const [post, setPost] = useState(postInitial);

  //[currentdata,function to update data]
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   if (e) {
  //     e.preventDefault();
  //   }
  //   /*
  //     the is the place where we connect backend api
  //      to send the data to the database
  //       */
  // };
  const popupHandler = (e) => {
    e.preventDefault();
    setPopup(true);
  };

  // sending data to databse and closing popup box
  const postHandler = (e) => {
    axios
      .post("/user", post)
      .then((response) => {
        console.log(response);
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
