import React from 'react'

export default function Registration() {
  return (
        <div className="login-area py-120">
    <div className="container">
      <div className="col-md-5 mx-auto">
        <div className="login-form">
          <div className="login-header">
            <img src="assets/img/logo/logo.png" alt="" />
            <p>Create your Taxica account</p>
          </div>
          <form action="#">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Your Password"
              />
            </div>
            <div className="form-check form-group">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="agree"
              />
              <label className="form-check-label" htmlFor="agree">
                I agree with the <a href="#">Terms Of Service.</a>
              </label>
            </div>
            <div className="d-flex align-items-center">
              <button type="submit" className="theme-btn">
                <i className="far fa-paper-plane" /> Register
              </button>
            </div>
          </form>
          <div className="login-footer">
            <p>
              Already have an account? <a href="http://localhost:3000/login">Login.</a>
            </p>
            <div className="social-login">
              <p>Continue with social media</p>
              <div className="social-login-list">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-google" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
  
  )
}
