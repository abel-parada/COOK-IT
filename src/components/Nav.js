import React from "react";
import { NavLink } from "react-router-dom";
import recipeLogo from "../images/cookit.svg";

const Nav = () => {
  return (
    <nav>
      <img alt="cook it logo" src={recipeLogo} className="logo" />
      <h2>The Authentic food</h2>
      <ul>
        <li>
          <NavLink to="/SignIn">Sign In</NavLink>
          <NavLink className="signup" to="/SignUp">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
