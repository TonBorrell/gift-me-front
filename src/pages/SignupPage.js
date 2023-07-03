import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignupPage.css";
import logo from "../images/logo.png";

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Call the Signup endpoint with username and password
    // Replace 'your-Signup-endpoint' with the actual Signup endpoint URL
    fetch(`${process.env.REACT_APP_BASE_URL}register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Signup response:", data);
        // Navigate to the next page upon successful Signup
        navigate("/setNameAge");
      })
      .catch((error) => {
        // Handle any Signup errors here
        console.error("Signup error:", error);
      });
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="signupPage">
      <img src={logo} alt="Logo" className="logoImage" />
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="inputField"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputField"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField"
        />
      </div>
      <div className="buttonContainer">
        <button className="signupButton" onClick={handleSignup}>
          Sign Up
        </button>
        <button className="loginButton" onClick={handleLogIn}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
