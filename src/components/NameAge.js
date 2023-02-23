import React from "react";
import Select from "react-select";

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

  const handleChangeSelect = (e) => {
    props.setPreferences((prevState) => ({
      ...prevState,
      ["sex"]: e.value,
    }));
  };

  const options = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "other", label: "Other" },
  ];

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
      <h3>How do you indentify?</h3>
      <div className="pref-select">
        <Select options={options} onChange={handleChangeSelect} />
      </div>
      <button onClick={buttonNext} className="pref-button">
        Next
      </button>
    </div>
  );
}

export default NameAge;
