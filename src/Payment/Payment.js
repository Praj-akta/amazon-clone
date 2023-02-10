import React, { useEffect, useState } from "react";
import axios from "../axios";
import { db } from "../firebase";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import ShoppingList from "../Checkout/ShoppingList";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Payment.scss";

const Payment = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });
        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : null);
  };

  return (
    <div className="payment">
      <h1> Checkout ({basket.length} items)</h1>
      <div className="payment-container">
        <div className="payment_section">
          <h3>Delivery Address: </h3>
          <div className="delivery-address">
            <p>{user?.email}</p>
            <p>Lorem ipsum</p>
            <p>Los angeles,CA</p>
          </div>
        </div>
        <div className="payment_section">
          <h3>Review items and delivery: </h3>
          <div className="payment-items">
            <ShoppingList list={basket} />
          </div>
        </div>
        <div className="payment_section">
          <h3>Payment Method: </h3>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <h3 className="payment-price">
                Order value: ${getBasketTotal(basket).toLocaleString()}
              </h3>
              <button
                className="submit-btn"
                disabled={processing || disabled || succeeded}
              >
                <span> {processing ? <p>Processing</p> : "Buy now"} </span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
