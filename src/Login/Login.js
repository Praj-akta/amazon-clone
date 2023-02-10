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
      .then((_) => {
        navigate("/");
      })
      .catch((err) => console.log("err", err));
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
        <h2> Sign-In </h2>

        <form onSubmit={signIn}>
          <h5>E-mail address</h5>
          <input
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="btn-sign-in submit-btn"
          >
            Sign in
          </button>
          <p id="terms-conditions">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
        <div id="new-to-amazon">
            <h5> New to Amazon?</h5>
          </div>
          <button
            type="button"
            onClick={(e) => navigate("/register")}
            className="btn-create-account"
          >
            Create your Amazon account
          </button>
      </div>
    </div>
  );
}

export default Login;
