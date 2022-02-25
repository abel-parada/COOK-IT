import React from "react";
import Main from "../components/Main";
import "../styles/landingStyle.css";
import Headerone from "../components/Headerone";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const LandingPage = () => {
  return (
    <div className="flec flex-col min-h-screen">
      <Headerone />
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
