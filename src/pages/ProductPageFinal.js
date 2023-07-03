import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./ProductPageFinal.css";

function ProductPageFinal() {
  const [product, setProduct] = useState(null);
  const [productRatings, setProductRatings] = useState({});
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const body_message = {
    name: user.name,
    age: user.age,
    preferences: JSON.parse(localStorage.getItem("interests")),
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body_message),
  };

  useEffect(() => {
    // Fetch a product from the API
    fetch(`${process.env.REACT_APP_BASE_URL}model_product`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching product:", error);
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

  const handleNextProduct = () => {
    // Fetch the next product from the API
    setProduct(null);
    fetch(`${process.env.REACT_APP_BASE_URL}model_product`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching product:", error);
      });
  };

  const modifyPreferences = () => {
    navigate("/setInterests");
  };

  const handleProductLink = () => {
    if (product && product.link) {
      window.open(product.link, "_blank");
    }
  };

  return (
    <div className="productPage">
      {product ? (
        <div className="productBox">
          <div className="productInfo">
            <h1 className="productName">{product.name}</h1>
            <p className="productPrice">{product.price}€</p>
          </div>
          <div className="productImageDiv">
            <img
              src={product.image}
              alt={product.name}
              className="productImage"
            />
            <div className="productButtons">
              <button onClick={modifyPreferences} className="buttonNext">
                Modify Preferences
              </button>
              <button onClick={handleProductLink} className="buttonLink">
                Go to Product
              </button>
              <button onClick={handleNextProduct} className="buttonNext">
                Get a New Product
              </button>
            </div>
          </div>
          <div className="productRating2">
            <span className="ratingText">
              What do you think about this recommendation?
            </span>
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                onClick={() => handleRatingClick(product, rating)}
                style={{
                  color:
                    rating <= productRatings[product.asin] ? "#85b3e1" : "gray",
                  cursor: "pointer",
                }}
                className="productStar"
              >
                ★
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="loading-page">
          <div className="loader"></div>
          <h2 className="loadingText">Loading...</h2>
        </div>
      )}
    </div>
  );
}

export default ProductPageFinal;
