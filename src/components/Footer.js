import React from "react";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <ul className="footerMenu d-flex justify-content-evenly">
        <li>
          Company
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Srvice</li>
            <li>Site Map</li>
          </ul>
        </li>
        <li>
          Products
          <ul>
            <li>Shared Hosting</li>
            <li>WordPress Hosting</li>
            <li> VPS Hosting</li>
            <li>Dedicated Hosting</li>
            <li>Reseller Hosting</li>
            <li>Hosting Features</li>
          </ul>
        </li>
        <li>
          Services
          <ul>
            <li>Hosting Solutions</li>
            <li>Domains</li>
            <li>SSL Sertificates</li>
            <li>Software Development</li>
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
          <span>&copy;</span> 2007-2022
          VV-MasteR. All rights reserved.
        </p>
      </section>
    </div>
  );
}
