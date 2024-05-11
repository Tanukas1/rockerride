import React from "react";

function Header() {
  return (
    <>
      <header className="header" >
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <div className="header-top-left">
                <div className="header-top-contact">
                  <ul>
                    <li>
                      <a href="">
                        <i className="far fa-envelopes" />
                        <span>[Manishkatiyar13@gmil.com]</span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+21236547898">
                        <i className="far fa-phone-volume" /> +2 123 654 7898
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-top-right">
                {/* <div className="header-top-link">
            <a href="/login">
              <i className="far fa-arrow-right-to-bracket" /> Login
            </a>
            <a href="/Registration">
              <i className="far fa-user-vneck" /> Register
            </a>
          </div> */}
                <div className="header-top-social">
                  <span>Follow Us: </span>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navigation" id="screen1">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo/logo.webp" alt="logo" />
              </a>
              <div className="mobile-menu-right">
                <div className="search-btn">
                  <button type="button" className="nav-right-link">
                    <i className="far fa-search" />
                  </button>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-mobile-icon">
                    <i className="far fa-bars" />
                  </span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/get-caps">
                      Get Cabs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contacts
                    </a>
                  </li>
                </ul>
                <div className="nav-right">
                  <div className="nav-right-btn mt-2">
                    <a href="#" className="theme-btn">
                      <span className="fas fa-taxi" />
                      Book A Taxi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="sidebar-popup">
        <div className="sidebar-wrapper">
          <div className="sidebar-content">
            <button type="button" className="close-sidebar-popup">
              <i className="far fa-xmark" />
            </button>
            <div className="sidebar-logo">
              <img src="assets/img/logo/logo.png" alt="" />
            </div>
            <div className="sidebar-about">
              <h4>About Us</h4>
              <p>
                There are many variations of passages available sure there
                majority have suffered alteration in some form by injected
                humour or randomised words which don't look even slightly
                believable.
              </p>
            </div>
            <div className="sidebar-contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <h6>Email</h6>
                  <a href="https://live.themewild.com/cdn-cgi/l/email-protection#4a23242c250a2f322b273a262f64292527">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="c8a1a6aea788adb0a9a5b8a4ade6aba7a5"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </li>
                <li>
                  <h6>Phone</h6>
                  <a href="tel:+21236547898">
                    <i className="far fa-phone" />
                    +2 123 654 7898
                  </a>
                </li>
                <li>
                  <h6>Address</h6>
                  <a href="#">
                    <i className="far fa-location-dot" />
                    25/B Milford Road, New York
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-social">
              <h4>Follow Us</h4>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
