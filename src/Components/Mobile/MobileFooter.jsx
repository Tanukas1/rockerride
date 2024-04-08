import React from 'react'

export default function MobileFooter() {
  return (

    <footer className="footer-area">
    <div className="footer-widget">
      <div className="container">
        <div className="row footer-widget-wrapper pt-120 pb-70">
          <div className="col-md-6 col-lg-4">
            <div className="footer-widget-box about-us">
              <a href="#" className="footer-logo">
                <img src="assets/img/logo/logo.webp" alt="" />
              </a>
              <p className="mb-3">
                We are many variations of passages available but the majority have
                suffered alteration in some form by injected humour words
                believable.
              </p>
              <ul className="footer-contact">
                <li>
                  <a href="tel:+21236547898">
                    <i className="far fa-phone" />
                    +2 123 654 7898
                  </a>
                </li>
                <li>
                  <i className="far fa-map-marker-alt" />
                  Manishkatiyar13@gmil.com
                </li>
                <li>
                  <a href="https://live.themewild.com/cdn-cgi/l/email-protection#8ce5e2eae3cce9f4ede1fce0e9a2efe3e1">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="81e8efe7eec1e4f9e0ecf1ede4afe2eeec"
                    >
                      297 CHANDRALOK COLONY LUCKNOW 226024
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Update News
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Testimonials
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Terms Of Service
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Our Drivers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Support Center</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> FAQ's
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Affiliates
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Booking Tips
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Book A Ride
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Contact Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-caret-right" /> Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Newsletter</h4>
              <div className="footer-newsletter">
                <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                <div className="subscribe-form">
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <button className="theme-btn" type="submit">
                      Subscribe Now <i className="far fa-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <p className="copyright-text">
              © Copyright <span id="date" /> <a href="#"> Rock Rides </a> All Rights
              Reserved.
            </p>
          </div>
          <div className="col-md-6 align-self-center">
            <ul className="footer-social">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </footer>
    
  )
}
