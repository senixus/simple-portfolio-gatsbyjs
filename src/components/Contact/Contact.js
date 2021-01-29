import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <main className="contact">
      <div className="contact-content">
        <div className="contact-section">
          <h1>Contact Me</h1>
          <form className="form">
            <div className="form__group form__group-control">
              <div className="form__group-control">
                <div className="form__group-label">
                  <label htmlFor="name">Name :</label>
                </div>
                <input type="text" id="name" placeholder="Name" name="name" />
              </div>
              <div className="form__group-control pl">
                <div className="form__group-label">
                  <label htmlFor="email">Email :</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form__group-control">
              <div className="form__group-label">
                <label htmlFor="subject">Subject :</label>
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form__group-control">
              <div className="form__group-label">
                <label htmlFor="message">Message :</label>
              </div>
              <textarea id="message" name="message" placeholder="Message" />
            </div>
            <div className="form__group-control">
              <button type="submit" className="contact-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
