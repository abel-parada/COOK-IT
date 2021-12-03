import React from "react";
import { Link } from "react-router-dom";
import recipeLogo from "../images/cookit.svg";

const Nav = () => {
  return (
    <nav className="navClas">
      <img alt="cook it logo" src={recipeLogo} className="logo" />
      <h2>The Authentic food</h2>
      <ul>
        <li>
          <Link to="/Signin" className="signin">
            Sign In
          </Link>
          <Link to="/Signup" className="signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
