import React from 'react'

export default function ForgotPassword() {
  return (
    <div className="login-area py-120">
  <div className="container">
    <div className="col-md-5 mx-auto">
      <div className="login-form">
        <div className="login-header">
          <img src="assets/img/logo/logo.png" alt="" />
          <p>Reset your Taxica account password</p>
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
          <div className="d-flex align-items-center">
            <button type="submit" className="theme-btn">
              <i className="far fa-key" /> Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
   </div>


  )
}
