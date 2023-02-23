import React from "react";

import "./NameAge.css";

import PreferencesInput from "../components/PreferencesInput";

function NameAge(props) {
  const buttonNext = () => {
    props.setNameAge(true);
    console.log(props.preferences);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setPreferences((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="name-age-user">
      <h3>Your name</h3>
      <PreferencesInput
        placeholder="Name"
        className="pref-input"
        name="name"
        onChange={handleChange}
      />
      <h3>Your age</h3>
      <PreferencesInput
        placeholder="Age"
        className="pref-input"
        name="age"
        onChange={handleChange}
      />
      <button onClick={buttonNext} className="pref-button">
        Next
      </button>
    </div>
  );
}

export default NameAge;
