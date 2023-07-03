import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Call the login endpoint with username and password
    // Replace 'your-login-endpoint' with the actual login endpoint URL
    fetch(`${process.env.REACT_APP_BASE_URL}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the login response here
        console.log("Login response:", data);
        // Navigate to the next page upon successful login
        navigate("/setInterests");
      })
      .catch((error) => {
        // Handle any login errors here
        console.error("Login error:", error);
      });
  };

  const handleSignUp = () => {
    // Call the sign-up endpoint with username and password
    // Replace 'your-signup-endpoint' with the actual sign-up endpoint URL
    navigate("/signup");
    /*
    fetch("your-signup-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the sign-up response here
        console.log("Sign-up response:", data);
        // Navigate to the next page upon successful sign-up
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle any sign-up errors here
        console.error("Sign-up error:", error);
      });
      */
  };

  return (
    <div className="loginPage">
      <img src="path/to/your/logo.png" alt="Logo" className="logoImage" />
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button className="loginButton" onClick={handleLogin}>
          Log In
        </button>
        <button className="signupButton" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
