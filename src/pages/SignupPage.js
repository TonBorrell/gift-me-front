import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

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
        // Handle the Signup response here
        console.log("Signup response:", data);
        // Navigate to the next page upon successful Signup
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle any Signup errors here
        console.error("Signup error:", error);
      });
  };

  const handleLogIn = () => {
    // Call the sign-up endpoint with username and password
    // Replace 'your-signup-endpoint' with the actual sign-up endpoint URL
    navigate("/login");
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
    <div className="signupPage">
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
