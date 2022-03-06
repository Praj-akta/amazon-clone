import React, { useEffect } from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { auth } from "./firebase";
import Header from "./Header/Header";
import Orders from "./Orders/Orders";
import Payment from "./Payment/Payment";
import Checkout from "./Checkout/Checkout";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const promise = loadStripe(
  "pk_test_51KZmoiEeA9WPxX06byl7DZ5Yt96yZgVuumXyb4uJn3Zvandp9FWLni0ypqPEK8lD2OaFh6i6zKMzEuPYSlYqoG5J00Uosou5PA"
);

const App = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          data: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          data: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Home />
              </React.Fragment>
            }
          />
          <Route
            path="/payment"
            element={
              <React.Fragment>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </React.Fragment>
            }
          />
          <Route
            path="/orders"
            element={
              <React.Fragment>
                <Header />
                <Orders />
              </React.Fragment>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
