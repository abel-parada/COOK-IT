import { NavLink, Link } from "react-router-dom";
import recipeLogo from "../images/cookit.svg";

const Nav = () => {
  return (
    <nav className="navClas">
      <Link to="/" className="logo-link">
        <img alt="cook it logo" src={recipeLogo} className="logo" />
      </Link>
      <h2>The Authentic food</h2>
      <ul className="nav-link">
        <li>
          <NavLink to="/recepie"> Recipe Form</NavLink>
          <NavLink to="/Signin" className="signin">
            Sign In
          </NavLink>
          <NavLink to="/Signup" className="signup">
            Sign Up
          </NavLink>
          <NavLink to="/about" className="about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
