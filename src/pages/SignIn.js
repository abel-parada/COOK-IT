import React, { useState, useEffect } from "react";
import SignInForm from "../components/SignInForm";
import "../styles/formStyle.css";
import Nav from "../components/Nav";

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [value, setValue] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(formState));
    setValue(userLogin);
  };
  useEffect(() => {
    if (value) {
      navigate("/home");
    }
  }, [value]);

  return (
    <div className="signin-container">
      <Nav />
      <main className="main-container">
        <SignInForm formHandler={handleChange} submit={handleSubmit} />
      </main>
    </div>
  );
};

export default SignIn;
