import React from "react";
import { FaUser, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos harum corporis fuga corrupti. Doloribus quis soluta
              nesciunt veritatis vitae nobis?
            </p>
            <div className="icons">
              <div className="row">
                <FaUser className="contact-icon" />
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Heng Mei Hui</div>
                </div>
              </div>
              <div className="row">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Tiong Bahru, Singapore</div>
                </div>
              </div>
              <div className="row">
                <FaEnvelope className="contact-icon" />
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">ratatat0211@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Email me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit"><a href="mailto:ratatat0211@gmail.com">Send email</a></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
