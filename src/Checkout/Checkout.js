import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal";
import ShoppingList from "./ShoppingList";
import { useStateValue } from "../StateProvider";

export default function Checkout() {
  const [{ basket, user }] = useStateValue();
  let totalPrice = 0;
  if (basket.length > 0) {
    basket.map(({ price }) => (totalPrice += parseInt(price)));
  }

  return (
    <div className="checkout">
      <img
        alt="advertisement"
        className="checkout-ad"
        src="https://images-na.ssl-images-amazon.com/images/G/15/GiftCards/Consumer/Cash/Q1/Cash_ILM_EN_650x45_2._CB648472931_.png"
      ></img>

      <div className="checkout-content">
        <div className="shopping-basket">
          <h3> Hello, {user ? user.email : "Guest"} </h3>
          <h2>
            {basket.length > 0 ? "Shopping Cart" : "Your Amazon cart is empty."}
          </h2>
          {basket.length > 0 ? <ShoppingList list={basket} /> : null}
        </div>
        <Subtotal itemsCount={basket.length} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
