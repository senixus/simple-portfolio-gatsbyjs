import React from "react";
import "./Navbar.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1 className="navbar__logo-head">
          <AniLink swipe top="entry" to="/" className="navbar__logo-link">
            N.
          </AniLink>
        </h1>
      </div>
      <ul className="navbar__nav">
        <li className="navbar__nav-item">
          <AniLink
            swipe
            top="entry"
            to="/"
            activeClassName="active-link"
            className="navbar__nav-link"
          >
            Home
          </AniLink>
        </li>
        <li className="navbar__nav-item">
          <AniLink
            swipe
            top="entry"
            to="/works"
            activeClassName="active-link"
            className="navbar__nav-link"
          >
            Works
          </AniLink>
        </li>
        <li className="navbar__nav-item">
          <AniLink
            swipe
            top="entry"
            to="/skills"
            activeClassName="active-link"
            className="navbar__nav-link"
          >
            Skills
          </AniLink>
        </li>
        <li className="navbar__nav-item">
          <AniLink
            swipe
            top="entry"
            to="/about"
            activeClassName="active-link"
            className="navbar__nav-link"
          >
            About
          </AniLink>
        </li>
        <li className="navbar__nav-item">
          <AniLink
            swipe
            top="entry"
            to="/contact"
            activeClassName="active-link"
            className="navbar__nav-link"
          >
            Contact
          </AniLink>
        </li>
        <li className="navbar__nav-item">
          <div className="bars">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </div>
        </li>
      </ul>

      {/* <ul className="social__media">
        <li className="social__media-list">
          <a
            className="social__media-links"
            href="/github"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li className="social__media-list">
          <a
            className="social__media-links"
            href="/linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="social__media-list">
          <a
            className="social__media-links"
            href="/twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
