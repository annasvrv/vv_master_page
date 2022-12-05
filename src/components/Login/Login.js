import React, { useState, useRef, useEffect } from "react";

import "./Login.css";

export default function Login() {
  const mailRef = useRef();
  const errRef = useRef();

  // const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    mailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [mail, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mail, pwd);
    setMail("");
    setPwd("");
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="Login mb-5">
        <h2>You are logged in!</h2>

        <p className="mt-5">
          Go to <a href="/">Home</a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="Login mb-5">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h2 className="mb-3">Sign In</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="mb-3 field">
            <label htmlFor="mail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="mail"
              ref={mailRef}
              autoComplete="off"
              onChange={(e) => setMail(e.target.value)}
              required
              value={mail}
              className="form-control"
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 field">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPwd(e.target.value)}
              required
              value={pwd}
              className="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="Check">
              Remember me
            </label>
          </div>
          <div className="login-button">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="btn btn-outline-light"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-5">
          Don't have an account? <a href="/Register">Register here</a>
        </p>
      </div>
    );
  }
}
