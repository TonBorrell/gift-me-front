import React from "react";

import "./PreferencesInput.css";

function PreferencesInput(props) {
  return (
    <input
      className="preference-input"
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
    />
  );
}

export default PreferencesInput;
