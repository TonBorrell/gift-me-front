import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./ProductPage.css";

function ProductPage() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [productRatings, setProductRatings] = useState({});

  useEffect(() => {
    // Fetch the list of products from the API
    fetch(`${process.env.REACT_APP_BASE_URL}product_rating/`)
      .then((response) => response.json())
      .then((data) => {
        // Set the list of products to the state
        setProducts(data);
      });
  }, []);

  const handleRatingClick = (product, rating) => {
    // Update the product rating in the state
    const updatedRatings = {
      ...productRatings,
      [product.asin]: rating,
    };
    // Save the updated product ratings to local storage
    localStorage.setItem("productRatings", JSON.stringify(updatedRatings));
    // Update the state to reflect the new product ratings
    setProductRatings(updatedRatings);
  };

  const handleNextClick = () => {
    // Increment the current product index by 1
    setCurrentProductIndex((index) => index + 1);
  };

  const handleBackClick = () => {
    // Decrement the current product index by 1
    setCurrentProductIndex((index) => index - 1);
  };

  const currentProduct = products[currentProductIndex];

  useEffect(() => {
    // Redirect to a new page when the user reaches the last product
    if (
      (currentProductIndex === products.length) &
      (currentProductIndex !== 0)
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const body_message = {
        name: user.name,
        age: user.age,
        preferences: JSON.parse(localStorage.getItem("interests")),
        rating: productRatings,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body_message),
      };
      fetch(`${process.env.REACT_APP_BASE_URL}product_rating/`, requestOptions)
        .then((response) => response.json())
        .then((data) => this.setState({ postId: data.id }));
      navigate("/thanks");
    }
  }, [productRatings, currentProductIndex, products, navigate]);

  return (
    <div className="productPage">
      {currentProduct ? (
        <div className="productBox">
          <h1 className="productName">{currentProduct.name}</h1>
          <div className="productImageDiv">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="productImage"
            />
          </div>
          <p className="productDescription">{currentProduct.description}</p>
          <div className="productRating">
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                onClick={() => handleRatingClick(currentProduct, rating)}
                style={{
                  color:
                    rating <= productRatings[currentProduct.asin]
                      ? "#85b3e1"
                      : "gray",
                  cursor: "pointer",
                }}
                className="productStars"
              >
                ★
              </span>
            ))}
          </div>
          <div className="productButtons">
            <button
              onClick={handleBackClick}
              disabled={currentProductIndex === 0}
              className="buttonBack"
            >
              Back
            </button>
            <button onClick={handleNextClick} className="buttonNext">
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="loadingProducts">Loading products...</div>
      )}
    </div>
  );
}

export default ProductPage;
