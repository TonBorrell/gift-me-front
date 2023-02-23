import React from "react";

import "./PreferencesBox.css";

function PreferencesBox(props) {
  return (
    <div className="box-pref">
      <div className="pref-image">
        <img className="pref-image-inside" src={props.imageUrl} />
      </div>
      <div className="pref-text">{props.text}</div>
    </div>
  );
}

export default PreferencesBox;
