import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
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
                      <a href="mailto:contact@rockriders.in">
                        <i className="far fa-envelope" />
                        <span>contact@rockriders.in</span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+7309619301">
                        <i className="fas fa-phone-volume" /> +91 7309619301
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
                    <i className="fab fa-instagram" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navigation" id="screen1">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <a className="navbar-brand" href="">
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
                    <a href="get-caps" className="theme-btn">
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

    </>
  );
}

export default Header;
