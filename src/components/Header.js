import React, { useState } from "react";

import logo from "../images/logo.svg";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="logo__image" />
        Gift Me
      </div>
      <div className="header__about">About us</div>
    </div>
  );
}

export default Header;
