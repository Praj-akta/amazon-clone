import React from "react";
import CurrencyFormat from "react-currency-format";

export default function Subtotal({ itemsCount, totalPrice }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({itemsCount} items):
              <strong> ${totalPrice.toLocaleString()} </strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        prefix={"$"}
        decimalScale={2}
        displayType="text"
        thousandSeparator={true}
        value={0} //getBasketTotal(basket)
      />
      <div>
        <button className="btn-checkout"> Proceed to checkout </button>
      </div>
    </div>
  );
}
