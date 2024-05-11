import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./Mobile/MobileHeader";
import { isMobile } from "react-device-detect";

export default function Contacts() {
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      <>
        <div className="contact-area py-4">
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fal fa-map-location-dot" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Office Address</h5>
                      <p>297 CHANDRALOK COLONY LUCKNOW 226024</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fal fa-phone-volume" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Call Us</h5>
                      <p>+91 9076538003</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fal fa-envelopes" />
                    </div>
                    <div className="contact-info-content">
                      <h5>Email Us</h5>
                      <p>Manishkatiyar13@gmil.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="contact-wrapper"
              style={{ backgroundColor: "#121244" }}
            >
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="contact-img">
                    <img src="assets/img/contact/01.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <h2 className="text-white">Get In Touch</h2>
                      <p className="text-muted">
                        Rock Riders is the best and affordable cab service
                        providers in Lucknow with well maintained and modern
                        fleets, operating 24*7 hrs service through friendly and
                        sophisticated staff to support all your travel needs.{" "}
                      </p>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Your Subject"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={5}
                          className="form-control"
                          placeholder="Write Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="theme-btn">
                        Send Message <i className="far fa-paper-plane" />
                      </button>
                      <div className="col-md-12 mt-3">
                        <div className="form-messege text-success" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4231.877069338066!2d80.94213323108052!3d26.88539139590934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d527adce65%3A0xc1297401c2b426e5!2s297%2C%20Chandralok%20Colony%2C%20Aliganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226024!5e0!3m2!1sen!2sin!4v1706768139631!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </>

      <Footer />
    </>
  );
}
