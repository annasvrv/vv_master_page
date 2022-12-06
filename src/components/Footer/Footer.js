import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <ul className="footerMenu d-flex justify-content-evenly">
        <li>
          <span className="footerListHeader">Company</span>
          <ul className="subList">
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Site Map</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="footerListHeader">Products</span>
          <ul className="subList">
            <li>
              <a href="/Hosting">Shared Hosting</a>
            </li>
            <li>
              <a href="/Hosting">WordPress Hosting</a>
            </li>
            <li>
              <a href="/Hosting">VPS Hosting</a>
            </li>
            <li>
              <a href="/Hosting">Dedicated Hosting</a>
            </li>
            <li>
              <a href="/Hosting">Reseller Hosting</a>
            </li>
            <li>
              <a href="/Hosting">Hosting Features</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="footerListHeader">Services</span>
          <ul className="subList">
            <li>
              <a href="/Services">Hosting Solutions</a>
            </li>
            <li>
              <a href="/Services">Domains</a>
            </li>
            <li>
              <a href="/Services">SSL Sertificates</a>
            </li>
            <li>
              <a href="/Services">Software Development</a>
            </li>
          </ul>
        </li>
      </ul>
      <section className="mt-5">
        <div className="text-center m-2 p-3 d-flex justify-content-center">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-branding-outline-footer social-footer me-3"
            title="LinkedIn profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-branding-outline-footer social-footer me-3"
            title="GitHub profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-branding-outline-footer social-footer me-3"
            title="Instagram profile"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-branding-outline-footer social-footer"
            title="Twitter profile"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>

        <p className=" text-center" style={{ fontSize: `14px` }}>
          <span>&copy;</span> 2007-2022 VV-MasteR. All rights reserved.
        </p>
      </section>
    </div>
  );
}
