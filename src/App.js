import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Header from "./Header/Header";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
