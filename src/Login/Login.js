import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => console.log("err", err));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => console.log("err", err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="header-logo"
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login-container">
        <h1> Sign-In </h1>

        <form>
          <h5>E-mail address or mobile phone number</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={(e) => signIn(e)}
            className="btn-sign-in submit-btn"
          >
            Sign in
          </button>
          <p id="terms-conditions">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <div id="new-to-amazon">
            <h5> New to Amazon?</h5>
          </div>
          <button
            type="button"
            onClick={(e) => register(e)}
            className="btn-create-account"
          >
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
