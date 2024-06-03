import React from "react";

function Footer() {
  return (
  <>
    <footer className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row footer-widget-wrapper pt-120 pb-70">
            <div className="col-md-6 col-lg-6">
              <div className="footer-widget-box about-us">
                <a href="#" className="footer-logo">
                  <img src="assets/img/logo/logo.webp" alt="" />
                </a>
                <p className="mb-3">
                  We are many variations of passages available but the majority
                  have suffered alteration in some form by injected humour words
                  believable.
                </p>
                <ul className="footer-contact">
                  <li>
                    <a href="tel:+917309619301">
                      <i className="fas fa-phone" /> +91 7309619301
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <span>297 CHANDRALOK COLONY LUCKNOW 226024</span>
                  </li>
                  <li>
                    <a href="mailto:contact@rockriders.in">
                      <i className="fas fa-envelope" /> contact@rockriders.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sx-6 col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> About Us
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> Update News
                    </a>
                  </li> */}
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
                  {/* <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> Our Drivers
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-6 col-sx-6 col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Support Center</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> FAQ's
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> Affiliates
                    </a>
                  </li> */}
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
                  {/* <li>
                    <a href="#">
                      <i className="fas fa-caret-right" /> Sitemap
                    </a>
                  </li> */}
                </ul>
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
                © Copyright <span id="date" /> <a href="#"> Rock Rides </a> All
                Rights Reserved.
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
                    <i className="fab fa-instagram" />
                  </a>
                </li>      
              </ul>
            </div>
          </div>
        </div>
      </div>
     
      </footer>
      <div class="getcall mobile-fixed" style={{display: "none"}} >
          <div className="row">
              <div class="col-xs-6 appoint"><a href="#formbox"><span>Book Taxi</span></a></div>
              <div class="col-xs-6 call"><a href="tel:+91 7309619301">Call Now</a></div>
          </div>
        </div>
   
        <a href="https://wa.me/919076538003" class="float" target="_blank">
          <i class="fab fa-whatsapp my-float"></i>
        </a>

       
  </>
  );
}

export default Footer;
