import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./SetNameAge.css";

function SetNameAge() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    // Load interests from local storage on component mount
    const storedNameAge = JSON.parse(localStorage.getItem("user"));
    if (storedNameAge) {
      setName(storedNameAge.name);
      setAge(storedNameAge.age);
    }
    console.log(storedNameAge);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleNextPageClick = () => {
    // Save the name and age as a dictionary in local storage
    const user = { name: name, age: age };
    localStorage.setItem("user", JSON.stringify(user));
    // Navigate to the next page
    navigate("setInterests");
  };

  console.log(process.env.REACT_APP_BASE_URL);

  return (
    <div className="nameAgePage">
      <div className="nameInput">
        <div className="nameAgeText">Name</div>
        <input
          className="nameAgeInput"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="ageInput">
        <div className="nameAgeText">Age</div>
        <input
          className="nameAgeInput"
          type="text"
          id="age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <button onClick={handleNextPageClick}>Next Page</button>
    </div>
  );
}

export default SetNameAge;
