import React from 'react'

export default function Login() {
  return (
    
    <div className="login-area py-120">
  <div className="container">
    <div className="col-md-5 mx-auto">
      <div className="login-form">
        <div className="login-header">
          <img src="assets/img/logo/logo.png" alt="" />
          <p>Login with your Taxica account</p>
        </div>
        <form action="#">
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
          <div className="d-flex justify-content-between mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <a href="http://localhost:3000/forgot-password.html" className="forgot-pass">
              Forgot Password?
            </a>
          </div>
          <div className="d-flex align-items-center">
            <button type="submit" className="theme-btn">
              <i className="far fa-sign-in" /> Login
            </button>
          </div>
        </form>
        <div className="login-footer">
          <p>
            Don't have an account? <a href="http://localhost:3000/Registration">Register.</a>
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
