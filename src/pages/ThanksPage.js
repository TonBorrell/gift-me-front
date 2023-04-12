import React from "react";
import { useNavigate } from "react-router-dom";

import "./ThanksPage.css";

function ThanksPage() {
  let navigate = useNavigate();
  const restartButton = () => {
    // Increment the current product index by 1
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      Thanks!
      <button onClick={restartButton}>Restart</button>
    </div>
  );
}

export default ThanksPage;
