import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

function Register() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const createAccount = (e) => {
    e.preventDefault();
    if (email && password === confirmPass) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            navigate("/");
          }
        })
        .catch((err) => console.log("err", err.message));
    } else if(password !== confirmPass) {
        setErr("Password's does not match.")
    }
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
      <div className="login-container register-container">
        <h2> Create account </h2>

        <form onSubmit={createAccount}>
          <h6>Your name</h6>
          <input
            type="text"
            required
            value={name}
            placeholder="First and last name"
            onChange={(e) => setName(e.target.value)}
          />
          <h6>E-mail address</h6>
          <input
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <h6>Password</h6>
          <input
            type="password"
            value={password}
            required
            minLength={6}
            placeholder="At least 6 characters"
            onChange={(e) => setPassword(e.target.value)}
          />

          <h6>Re-enter Password</h6>
          <input
            type="password"
            value={confirmPass}
            required
            minLength={6}
            placeholder="At least 6 characters"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
            {
                err && (
                    <span className="err-msg">{err}</span>
                )
            }
          <button
            type="submit"
            className="btn-sign-in submit-btn"
          >
            Continue
          </button>
          <p id="terms-conditions">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
        <div>
          <h5>
            Already have an account ? <a href="/login">Sign in</a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Register;
