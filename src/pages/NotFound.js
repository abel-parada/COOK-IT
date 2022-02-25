import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/notFound.css";
import notfound from "../images/notfound.png";
const NotFound = () => {
  return (
    <div className="nofound-wrapper">
      <h1>We are Sorry, Page Not found</h1>
      <div className="image">
        <img src={notfound} alt="not found" />
      </div>
      <NavLink to="/" className="navlink">
        Back to homepage
      </NavLink>
    </div>
  );
};

export default NotFound;
