import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [productRatings, setProductRatings] = useState({});

  useEffect(() => {
    // Fetch the list of products from the API
    fetch("http://127.0.0.1:80/product_rating/")
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
      console.log(productRatings);
      console.log(JSON.stringify(productRatings));
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productRatings),
      };
      fetch("http://127.0.0.1:80/product_rating/", requestOptions)
        .then((response) => response.json())
        .then((data) => this.setState({ postId: data.id }));
      navigate("/thanks");
    }
  }, [productRatings, currentProductIndex, products, navigate]);

  return (
    <div>
      {currentProduct ? (
        <div>
          <h1>{currentProduct.name}</h1>
          <img src={currentProduct.image} alt={currentProduct.name} />
          <p>{currentProduct.description}</p>
          <div>
            <span>Rating:</span>
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                onClick={() => handleRatingClick(currentProduct, rating)}
                style={{
                  color:
                    rating <= productRatings[currentProduct.asin]
                      ? "gold"
                      : "gray",
                  cursor: "pointer",
                }}
              >
                ★
              </span>
            ))}
          </div>
          <button
            onClick={handleBackClick}
            disabled={currentProductIndex === 0}
          >
            Back
          </button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      ) : (
        <div>Loading products...</div>
      )}
    </div>
  );
}

export default ProductPage;
