import React from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="innerHeader setWidth d-f ai-c jc-sb">
        <img src={logo} alt="logo" />
        <div className="links">
          <NavLink className="link" to="/">
            Features
          </NavLink>
          <NavLink className="link" to="team">
            Team
          </NavLink>
          <NavLink className="link" to="/sign-in">
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
