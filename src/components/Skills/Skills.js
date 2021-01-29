import React from "react";
import "./Skills.scss";
import AniLink from "gatsby-plugin-transition-link/AniLink";
const Skills = () => {
  return (
    <main className="skills">
      <div className="skills-content">
        <div className="skills-content__item">
          <div className="skills__section">
            <h1>Skills & Experince</h1>
            <div className="skills__section-about">
              <p>
                The main area of my expertise is front end development (client
                side of the web).
              </p>
              <p>
                HTML, CSS, JS (TypeScript), building small and medium web apps
                with Angular 2+, custom plugins, features, animations, and
                coding interactive layouts.
              </p>
              <p>
                HTML, CSS, JS (TypeScript), building small and medium web apps
                with Angular 2+, custom plugins, features, animations, and
                coding interactive layouts.
              </p>
              <p>
                <AniLink swipe top="entry" to="/contact">
                  Contact me
                </AniLink>
              </p>
            </div>
          </div>

          <div className="skills__bars">
            <h2>Skills</h2>
            <div className="html-section">
              <div className="skill-bars">
                <p className="skill-bars-head">HTML5</p>
              </div>
              <div className="progress">
                <div className="progress-bar html">80%</div>
              </div>
            </div>

            <div className="css-section">
              <div className="skill-bars">
                <p className="skill-bars-head">CSS3</p>
              </div>
              <div className="progress">
                <div className="progress-bar css">65%</div>
              </div>
            </div>

            <div className="js-section">
              <div className="skill-bars">
                <p className="skill-bars-head">JavaScript</p>
              </div>
              <div className="progress">
                <div className="progress-bar js">70%</div>
              </div>
            </div>

            <div className="react-section">
              <div className="skill-bars">
                <p className="skill-bars-head">ReactJS</p>
              </div>
              <div className="progress">
                <div className="progress-bar react">50%</div>
              </div>
            </div>

            <div className="bootstrap-section">
              <div className="skill-bars">
                <p className="skill-bars-head">Bootstrap</p>
              </div>
              <div className="progress">
                <div className="progress-bar bootstrap">75%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
