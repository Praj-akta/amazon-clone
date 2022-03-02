import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";
import "./Product.scss";

function Product({ id, title, image, rating, price }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      data: { id, title, image, rating, price },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title"> {title}</p>
        <p className="product-price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <p className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </p>
      </div>
      <img src={image} className="product-image" alt="img" />
      <button onClick={addToBasket}> Add to basket </button>
    </div>
  );
}

export default Product;
