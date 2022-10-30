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
    </div>
  );
}
