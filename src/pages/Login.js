import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button";

import "./Login.css";

import logo from "../images/logo.svg";
import login from "../functions/login";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function prelogin() {
    const response = await login(username, password);
    if (response["Logged in"]) {
      navigate("/");
    }
  }

  return (
    <div className="body">
      <div className="gift-logo">
        <img src={logo} alt="Logo" className="gift-logo__image" />
      </div>
      <form className="login-inputs">
        <div className="div">
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
        </div>
      </form>
      <div className="login-buttons">
        <Button function={prelogin} text="Log in" />
        <Link to="/signup">
          <Button text="Sign up" />
        </Link>
        <span className="span"></span>
        <span className="span"></span>
      </div>
    </div>
  );
}

export default Login;
