import React, { useLayoutEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

import "./ProductContainer.css";

function ProductContainer(props) {
  const [rating, setRating] = useState(0);
  const [starSize, setStarSize] = useState(60);

  const handleRating = (rate) => {
    setRating(rate);
  };

  useLayoutEffect(() => {
    function handleResize(width) {
      if (width < 450) {
        setStarSize(30);
      } else if (width < 850 && width > 450) {
        setStarSize(45);
      } else {
        setStarSize(60);
      }
    }

    function updateWidth() {
      handleResize(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="product-container">
      <div className="product-image">
        <img className="image" src={props.imageUrl} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{props.productText}</h2>
        <h2 className="product-price">{props.productPrice}</h2>
      </div>
      <Rating
        className="rating-product"
        onClick={handleRating}
        allowFraction="true"
        size={starSize}
      />
      <div className="previous-next-button">
        <button className="previous-button">Previous</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
}

export default ProductContainer;
