import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import logo from "../images/logo.svg";

import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  return (
    <div className="body">
      <div className="gift-logo">
        <img src={logo} alt="Logo" className="gift-logo__image" />
      </div>
      <form className="signup-inputs">
        <div className="div">
          <input
            className="input-name"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-name"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input-password"
            type="password"
            placeholder="Repeat Password"
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </div>
      </form>
      <div className="signup-buttons">
        <div className="test">
          <Button text="Create Account" />
          <Link to="/Login" className="test">
            <Button text="Already have an account?" />
          </Link>
        </div>
        <span className="span"></span>
        <span className="span"></span>
      </div>
    </div>
  );
}

export default Signup;
