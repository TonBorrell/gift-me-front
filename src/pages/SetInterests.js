import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate("/productPage");
  };

  return (
    <div>
      <h1>Interests</h1>
      <div>
        <div
          className="coffeeBox"
          onClick={() => handleInterestClick("coffee")}
          style={{
            backgroundColor: interests.coffee ? "red" : null,
          }}
        >
          <img src="/coffee.png" alt="Coffee" />
          <p>Coffee</p>
          {interests.coffee ? <span>selected</span> : null}
        </div>
        <div
          className="cookingBox"
          onClick={() => handleInterestClick("cooking")}
          style={{
            backgroundColor: interests.cooking ? "red" : null,
          }}
        >
          <img src="/cooking.png" alt="Cooking" />
          <p>Cooking</p>
          {interests.cooking ? <span>Selected</span> : null}
        </div>
        <div
          className="sportsBox"
          onClick={() => handleInterestClick("sports")}
          style={{
            backgroundColor: interests.sports ? "red" : null,
          }}
        >
          <img src="/sports.png" alt="Sports" />
          <p>Sports</p>
          {interests.sports ? <span>Selected</span> : null}
        </div>
        <div
          className="carsBox"
          onClick={() => handleInterestClick("cars")}
          style={{
            backgroundColor: interests.cars ? "red" : null,
          }}
        >
          <img src="/cars.png" alt="Cars" />
          <p>Cars</p>
          {interests.cars ? <span>Selected</span> : null}
        </div>
        <div
          className="technologyBox"
          onClick={() => handleInterestClick("technology")}
          style={{
            backgroundColor: interests.technology ? "red" : null,
          }}
        >
          <img src="/technology.png" alt="Technology" />
          <p>Technology</p>
          {interests.technology ? <span>Selected</span> : null}
        </div>
        <div
          className="gardenBox"
          onClick={() => handleInterestClick("garden")}
          style={{
            backgroundColor: interests.garden ? "red" : null,
          }}
        >
          <img src="/garden.png" alt="Garden" />
          <p>Garden</p>
          {interests.garden ? <span>Selected</span> : null}
        </div>
      </div>
      <div>
        <button onClick={onPrevPage}>Back</button>
        <button onClick={onNextPage}>Next</button>
      </div>
    </div>
  );
}

export default InterestPage;
