import React from "react";

import "./TextBoxLogin.css";

function TextBoxLogin(props) {
  return (
    <div className="div">
      <input
        className="input-name"
        type="text"
        placeholder="Username"
        value={props.message}
      />
      <input
        className="input-password"
        type="password"
        placeholder="Password"
      />
    </div>
  );
}

export default TextBoxLogin;
