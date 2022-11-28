import React from "react";

import "./Login.css";

export default function Login() {
  return (
    <div className="Login">
      <h2>Login</h2>
      <form action="">
        <label htmlFor="username">Enter username:</label>
        <br />
        <input type="text" placeholder="your username" />
        <br />
        <label htmlFor="password">Enter password:</label>
        <br />
        <input type="password" placeholder="your password" />
      </form>

      <p className="mt-5">
        Don't have account? <a href="/Register">Register now</a>
      </p>
    </div>
  );
}
