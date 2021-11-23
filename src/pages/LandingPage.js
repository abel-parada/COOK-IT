import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "../styles/landingStyle.css";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
