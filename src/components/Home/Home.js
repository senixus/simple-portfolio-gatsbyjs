import React from "react";
import "./Home.scss";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Home = () => {
  return (
    <main className="home">
      <div className="home-content">
        <div className="developer">
          <h1 className="developer__info">
            <span>Hi,</span>
            <span>I'm senixus</span>
            <span>Web Developer.</span>
          </h1>
          <div className="front-end">
            <h4>Front End Developer</h4>
          </div>
          <AniLink swipe top="entry" to="/contact" className="contact-btn">
            Contact me!
          </AniLink>
        </div>
        <div className="email-section">
          <p className="email-section__text">
            test<span className="at">[at]</span>gmail.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
