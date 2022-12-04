import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Register.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidMail(EMAIL_REGEX.test(mail));
  }, [mail]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, mail, pwd, matchPwd]);

  function handleChangeName(event) {
    setUser(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(mail);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return null;
    }
    // console.log(user, mail, pwd);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="Register mb-5">
        <p>
          <FontAwesomeIcon icon={faCheck} className="successIcon" />
        </p>
        <h2 className="mb-3">Thank you!</h2>
        <p>Your submission has been sent.</p>
        <p className="mt-5">
          Already have an account? <a href="/Login">Login here</a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="Register mb-5">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h2 className="mb-3">Create an account</h2>
        <form className="registerForm mb-5" onSubmit={handleSubmit}>
          <div className="mb-3 field">
            <label htmlFor="username" className="form-label">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              ref={userRef}
              value={user}
              onChange={handleChangeName}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              className="form-control"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens are allowed.
            </p>
          </div>

          <div className="mb-3 field">
            <label htmlFor="email" className="form-label">
              Email address:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMail || !mail ? "hide" : "invalid"}
              />
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setMail(e.target.value)}
              className="form-control"
              required
              aria-invalid={validMail ? "false" : "true"}
              aria-describedby="mailnote"
              onFocus={() => setMailFocus(true)}
              onBlur={() => setMailFocus(false)}
            />
            <p
              id="mailnote"
              className={
                mailFocus && mail && !validMail ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must include the at-sign @ and the correct domain name part.
              <br />
              Letters, numbers, underscores, hyphens are allowed.
            </p>
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3 field">
            <label htmlFor="Password" className="form-label">
              Create password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={(e) => setPwd(e.target.value)}
              className="form-control"
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters. <br />
              Must include uppercase and lowercase letters, a number and a
              special character. <br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>
          </div>

          <div className="mb-3 field">
            <label htmlFor="confirm_pwd" className="form-label">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              className="form-control"
              autoComplete="new-password"
              required
              onChange={(e) => setMatchPwd(e.target.value)}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="Check">
              Remember me
            </label>
          </div>
          <button
            disabled={
              !validName || !validMail || !validPwd || !validMatch
                ? true
                : false
            }
            type="submit"
            onSubmit={handleSubmit}
            className="btn btn-outline-light"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5">
          Already have an account? <a href="/Login">Login here</a>
        </p>
      </div>
    );
  }
}
