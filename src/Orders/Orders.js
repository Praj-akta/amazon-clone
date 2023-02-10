import React, { useEffect, useState } from "react";
import moment from "moment";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import ShoppingList from "../Checkout/ShoppingList";
import "./Orders.scss";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1> Your orders </h1>
      {orders && orders.length > 0 ? (
        <div className="orders-container">
          {orders.map((value, index) => {
            return <Order order={value} key={index} />;
          })}
        </div>
      ) : (
        <div className="text-center">
          <h3>You have no orders</h3>
          <Link to="/">
            <button className="submit-btn"> Shop now </button>
          </Link>
        </div>
      )}
    </div>
  );
}

function Order({ order }) {
  return (
    <div className="order">
      <div className="heading">
        <h2>Order </h2>
        <small>{order.id} </small>
      </div>
      <p> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </p>
      <ShoppingList list={order.data.basket} />
      <h3> Order Total: ${order.data.amount / 100}</h3>
    </div>
  );
}

export default Orders;
