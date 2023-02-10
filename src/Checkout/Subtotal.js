import React from "react";
import { useNavigate } from "react-router-dom";

export default function Subtotal({ itemsCount, totalPrice }) {
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({itemsCount} items):
        <strong> ${totalPrice.toLocaleString()} </strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" /> This order contains gift
      </small>
      <div>
        <button className="btn-checkout" onClick={(_) => navigate("/payment")}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
