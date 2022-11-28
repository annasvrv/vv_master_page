import React from "react";

import "./Register.css";

export default function Register() {
  return (
    <div className="Register">
      <h2>
        Create account
      </h2>
      <form action="" className="mb-5">
        <div>
          <label htmlFor="first name">Enter firstname:</label> <br />
          <input type="text" placeholder="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Enter larstname:</label> <br />
          <input type="text" placeholder="lastname" />
        </div>
        <div>
          <label htmlFor="email">Enter e-mail:</label> <br />
          <input type="email" placeholder="e-mail" />
        </div>
        <div>
          <label htmlFor="password">Enter password:</label> <br />
          <input type="password" placeholder="password" />
        </div>
      </form>
    </div>
  );
}
