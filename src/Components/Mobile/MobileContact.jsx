import React from 'react'

export default function MobileContact() {
  return (
    <div className="contact-area py-2">
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
              <p>
                <a
                  href="https://live.themewild.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="10797e767f507568717d607c753e737f7d"
                >
                   Manishkatiyar13@gmil.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-wrapper" style={{backgroundColor: "#121244"}}>
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="contact-img">
            <img src="assets/img/contact/01.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="contact-form">
            <div className="contact-form-header">
              <h2 className='text-white'>Get In Touch</h2>
              <p className='text-muted'>Rock Riders is the best and affordable cab service providers in Lucknow with well maintained and modern fleets, operating 24*7 hrs service through friendly and sophisticated staff to support all your travel needs.
               {" "}
              </p>
            </div>
            <form
              method="post"
              action="https://live.themewild.com/taxica/assets/php/contact.php"
              id="contact-form"
            >
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
  )
}
