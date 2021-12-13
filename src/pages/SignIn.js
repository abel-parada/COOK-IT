import React, { useState, useEffect } from "react";
import SignInForm from "../components/SignInForm";
import "../styles/formStyle.css";
import Headerone from "../components/Headerone";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
  const [value, setValue] = useState("")
  let navigate = useNavigate()
  let dispatch = useDispatch()
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
      dispatch(userLogin(formState))
      setValue(userLogin)
  };
  useEffect(()=>{
    if(value){
      navigate("/home")
    }
  }, [value])
  // // google login
  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;
  //   try {
  //     dispatch({ type: "AUTH", data: { result, token } });
  //     console.log(token);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const googleFailure = (error) => {
  //   console.log(error);
  //   console.error("Google singin was not successfull. Try again!");
  // };


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
