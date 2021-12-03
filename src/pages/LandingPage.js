import React from "react";
import Main from "../components/Main";
import "../styles/landingStyle.css";
import Headerone from "../components/Headerone";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Headerone />
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
