import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as FaIcons from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showSideMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScreenSize = (e) => {
      if (e.target.innerWidth >= 530) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleScreenSize);
    return () => window.removeEventListener("resize", handleScreenSize);
  }, [isOpen]);

  return (
    <nav className={isOpen ? "mobile-menu" : "navbar"}>
      <div className="navbar__logo">
        <h1 className="navbar__logo-head">
          <AniLink swipe top="entry" to="/" className="navbar__logo-link">
            N.
          </AniLink>
        </h1>
      </div>
      <ul className={isOpen ? "mobile-menu-nav" : "navbar__nav"}>
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
      </ul>
      <div className="hamburger" onClick={showSideMenu}>
        {isOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
