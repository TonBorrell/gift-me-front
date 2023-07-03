import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import coffee from "../images/coffee2.png";
import cooking from "../images/cooking.png";
import sports from "../images/sports.png";
import cars from "../images/cars.png";
import technology from "../images/technology.png";
import garden from "../images/garden.png";

import "./SetInterests.css";

function InterestPage() {
  let navigate = useNavigate();
  const [interests, setInterests] = useState({
    coffee: false,
    cooking: false,
    sports: false,
    cars: false,
    technology: false,
    garden: false,
  });

  useEffect(() => {
    // Load interests from local storage on component mount
    const storedInterests = JSON.parse(localStorage.getItem("interests"));
    if (storedInterests) {
      setInterests(storedInterests);
    }
  }, []);

  const handleInterestClick = (interest) => {
    // Toggle the boolean value for the clicked interest
    const updatedInterests = {
      ...interests,
      [interest]: !interests[interest],
    };
    // Save the updated interests to local storage
    localStorage.setItem("interests", JSON.stringify(updatedInterests));
    // Update the state to reflect the new interests
    setInterests(updatedInterests);
  };

  const onPrevPage = () => {
    // Navigate to the back page
    navigate("/");
  };

  const onNextPage = () => {
    // Navigate to the back page
    navigate("/productPageFinal");
  };

  return (
    <div className="interestsPage">
      <h1 className="title">What do you enjoy?</h1>
      <div className="preferenceBoxes">
        <div className="preferenceBoxes1">
          <div
            className="coffeeBox"
            onClick={() => handleInterestClick("coffee")}
            style={{
              backgroundColor: interests.coffee ? "#ff9999" : null,
            }}
          >
            <img src={coffee} alt="Coffee" />
            <p>Coffee</p>
            {interests.coffee ? <span>selected</span> : null}
          </div>
          <div
            className="cookingBox"
            onClick={() => handleInterestClick("cooking")}
            style={{
              backgroundColor: interests.cooking ? "#ff9999" : null,
            }}
          >
            <img src={cooking} alt="Cooking" />
            <p>Cooking</p>
            {interests.cooking ? <span>Selected</span> : null}
          </div>
          <div
            className="sportsBox"
            onClick={() => handleInterestClick("sports")}
            style={{
              backgroundColor: interests.sports ? "#ff9999" : null,
            }}
          >
            <img src={sports} alt="Sports" />
            <p>Sports</p>
            {interests.sports ? <span>Selected</span> : null}
          </div>
        </div>
        <div className="preferenceBoxes2">
          <div
            className="carsBox"
            onClick={() => handleInterestClick("cars")}
            style={{
              backgroundColor: interests.cars ? "#ff9999" : null,
            }}
          >
            <img src={cars} alt="Cars" />
            <p>Cars</p>
            {interests.cars ? <span>Selected</span> : null}
          </div>
          <div
            className="technologyBox"
            onClick={() => handleInterestClick("technology")}
            style={{
              backgroundColor: interests.technology ? "#ff9999" : null,
            }}
          >
            <img src={technology} alt="Technology" />
            <p>Technology</p>
            {interests.technology ? <span>Selected</span> : null}
          </div>
          <div
            className="gardenBox"
            onClick={() => handleInterestClick("garden")}
            style={{
              backgroundColor: interests.garden ? "#ff9999" : null,
            }}
          >
            <img src={garden} alt="Garden" />
            <p>Garden</p>
            {interests.garden ? <span>Selected</span> : null}
          </div>
        </div>
      </div>
      <div className="buttonsDiv">
        <button className="backPageButton" onClick={onPrevPage}>
          Back
        </button>
        <button className="nextPageButton" onClick={onNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default InterestPage;
