import React from "react";
import { useStateValue } from "../StateProvider";

function ShoppingList({ list }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      data: id,
    });
  };

  return (
    <div className="shopping-list">
      {list.map(({ id, title, image, price }, index) => {
        return (
          <div className="product shopping-cart-products" key={index}>
            <div>
              <img src={image} className="product-image" alt="img" />
            </div>
            <div className="product-info">
              <div className="product-description">
                <div className="title"> {title} </div>
                <div className="product-price">
                  <small>$</small>
                  <strong>{price.toLocaleString()} </strong>
                </div>
              </div>
              <div>
                <div className="in-stock">In Stock </div>
                <div className="regular-text">
                  Ships from and sold by Amazon.ca
                </div>
                <div className="regular-text"> Eligible for FREE Shipping</div>
              </div>
              <button
                className="submit-btn"
                onClick={(_) => removeFromBasket(id)}
              >
                Remove from basket
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingList;
