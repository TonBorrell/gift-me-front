import React, { useLayoutEffect, useState } from "react";

import "./SetPreferences.css";

import NameAge from "../components/NameAge";
import ForWho from "../components/ForWho";

import PreferencesInput from "../components/PreferencesInput";

function SetPreferences(props) {
  function decideRender(nameAge) {
    if (nameAge === false) {
      return (
        <div>
          <NameAge
            preferences={props.preferences}
            setPreferences={props.setPreferences}
            nameAge={nameAge}
            setNameAge={setNameAge}
          />
        </div>
      );
    } else {
      return (
        <div>
          <ForWho
            preferences={props.preferences}
            setPreferences={props.setPreferences}
            nameAge={nameAge}
            setNameAge={setNameAge}
          />
        </div>
      );
    }
  }

  const changePreferenceDone = () => {
    console.log(props.preferencesDone);
    props.setPreferencesDone(true);
  };

  const justLog = () => {
    console.log(props.preferences);
  };

  const justLog2 = () => {
    setNameAge(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setPreferences((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [nameAge, setNameAge] = useState(false);

  return (
    <div>
      {decideRender(nameAge)}
      <button onClick={justLog} className="last-button">
        Click to see preferences state
      </button>
      <button onClick={changePreferenceDone} className="last-button">
        Do not click
      </button>
    </div>
  );
}

export default SetPreferences;
