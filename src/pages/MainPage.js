import React, { useState } from "react";
import Header from "../components/Header";

import ProductContainer from "./ProductContainer";
import SetPreferences from "./SetPreferences";

import "./Mainpage.css";

function Mainpage() {
  function decideRender(preferencesDone) {
    if (preferencesDone === true) {
      return (
        <ProductContainer
          imageUrl="https://images-eu.ssl-images-amazon.com/images/I/81hSpHAXT4L._AC_UL300_SR300,200_.jpg"
          productText="D'Addario Cuerdas Guitarra Electrica | Cuerdas de Guitarra | Cuerdas
          para Guitarra Eléctrica | NYXL1046 Nickel Wound, Regular"
          productPrice="11.9€"
        />
      );
    } else {
      return (
        <SetPreferences
          preferencesDone={preferencesDone}
          setPreferencesDone={setPreferencesDone}
          preferences={preferences}
          setPreferences={setPreferences}
        />
      );
    }
  }

  const [preferencesDone, setPreferencesDone] = useState(false);
  const [preferences, setPreferences] = useState({});

  return (
    <div className="mainpage">
      <Header />
      <div className="body-main">{decideRender(preferencesDone)}</div>
    </div>
  );
}

export default Mainpage;
