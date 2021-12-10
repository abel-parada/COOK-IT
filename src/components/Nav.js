import { NavLink } from "react-router-dom";
import recipeLogo from "../images/cookit.svg";

const Nav = () => {
  return (
    <nav className="navClas">
      <img alt="cook it logo" src={recipeLogo} className="logo" />
      <h2>The Authentic food</h2>
      <ul className="nav-link">
        <li>
          <NavLink to="/Signin" className="signin">
            Sign In
          </NavLink>
          <NavLink to="/Signup" className="signup">
            Sign Up
          </NavLink>
          <NavLink to="/about" className="about">
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
