import React, { useEffect } from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { auth } from "./firebase";
import Header from "./Header/Header";
import Checkout from "./Checkout/Checkout";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
  }, []);

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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
