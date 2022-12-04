import React from "react";

import "./Login.css";

export default function Login() {
  return (
    <div className="Login mb-5">
      <h2 className="mb-3">Login</h2>
      <form className="loginForm">
        <div className="mb-3 field">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 field">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="Check">
            Remember me
          </label>
        </div>
        <div className="login-button">
          <button type="submit" className="btn btn-outline-light">
            Log in
          </button>
        </div>
      </form>

      <p className="mt-5">
        Don't have an account? <a href="/Register">Register here</a>
      </p>
    </div>
  );
}
