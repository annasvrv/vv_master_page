import React from "react";
import logo from "../styles/VV_master_logo1.png";
import { useLocation } from "react-router-dom";

import "../styles/Header.css";

export default function Header() {
  // let menu = props.navMenu;
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="./Main">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form className="d-flex w-100 me-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form> */}

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    splitLocation[1] === "Main" ? "nav-link active" : "nav-link"
                  }
                  href="/Main"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    splitLocation[1] === "About"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/About"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    splitLocation[1] === "Hosting"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/Hosting"
                >
                  Hosting
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    splitLocation[1] === "Services"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/Services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    splitLocation[1] === "Contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/Contact"
                >
                  Contact
                </a>
              </li>

              {/* {Object.keys(menu).map((elem) => {
                return (
                  <li className="nav-item">
                    <a
                      className={
                        splitLocation[1] === elem
                          ? "nav-link active"
                          : "nav-link"
                      }
                      href={menu[elem]}
                    >
                      {elem}
                    </a>
                  </li>
                );
              })} */}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  UA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
