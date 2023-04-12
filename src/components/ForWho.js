import React from "react";

import "./ForWho.css";
import PreferencesBox from "./PreferencesBox";

function ForWho(props) {
  const buttonNext = () => {
    props.setNameAge(true);
    console.log(props.preferences);
  };

  const buttonBack = () => {
    props.setNameAge(false);
    console.log(props.preferences);
  };

  return (
    <div className="name-age-user">
      <div className="preferences-boxes">
        <div className="preferences-boxes-row">
          <button className="box-pref-button">
            <div className="pref-image">
              <img
                className="pref-image-inside"
                src="https://cdn-icons-png.flaticon.com/512/5067/5067805.png"
              />
            </div>
            <div className="pref-text">Friend</div>
          </button>
          <PreferencesBox
            text="Mother"
            imageUrl="https://cdn-icons-png.flaticon.com/512/739/739249.png"
          />
          <PreferencesBox
            text="Me"
            imageUrl="https://cdn-icons-png.flaticon.com/512/9731/9731722.png"
          />
        </div>
        <div className="preferences-boxes-row">
          <PreferencesBox
            text="Friend"
            imageUrl="https://cdn-icons-png.flaticon.com/512/5067/5067805.png"
          />
          <PreferencesBox
            text="Mother"
            imageUrl="https://cdn-icons-png.flaticon.com/512/739/739249.png"
          />
          <PreferencesBox
            text="Me"
            imageUrl="https://cdn-icons-png.flaticon.com/512/9731/9731722.png"
          />
        </div>
        <div className="preferences-boxes-row">
          <PreferencesBox
            text="Friend"
            imageUrl="https://cdn-icons-png.flaticon.com/512/5067/5067805.png"
          />
          <PreferencesBox
            text="Mother"
            imageUrl="https://cdn-icons-png.flaticon.com/512/739/739249.png"
          />
          <PreferencesBox
            text="Me"
            imageUrl="https://cdn-icons-png.flaticon.com/512/9731/9731722.png"
          />
        </div>
      </div>

      <div className="buttons-pref">
        <button onClick={buttonBack} className="pref-button">
          Back
        </button>
        <button onClick={buttonNext} className="pref-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default ForWho;
