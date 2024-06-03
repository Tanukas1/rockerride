import React, { useState } from "react";
import Mobile from "./MobileHeader.css";

export default function MobileHeader() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid px-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <div className="form-inline">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo/logo.webp" alt="logo" />
            </a>
          </div>
        </nav>
        {/* <div className="card mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28487.9966749243!2d80.87705079953196!3d26.808141862790176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc20efc38085%3A0xae8f7527ef945bc!2sAlambagh%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1705658930210!5m2!1sen!2sin"
          width={360}
          height={570}/>
                </div>
                <div className="">
        <button
          type="button"
          className="btn btn-warning text-white rounded-pill w-100"
        >
          Confirm Boarding Point
        </button>
                </div>   */}

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <a className="navbar-brand">
              <img
                src="assets/img/logo/logo.webp"
                class="rounded-circle"
                // style={{ width: "100px" }}
              />
              
            </a>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="nav-link" href="/">
                  <div class="row">
                    <div class="col-2">
                      <i class="bi bi-car-front-fill text-danger"></i>
                    </div>
                    <div class="col-8">Home</div>
                    <div class="col-2">
                      <i class="bi bi-caret-right-fill"></i>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/get-caps">
                  <div class="row">
                    <div class="col-2">
                      <i class="bi bi-car-front-fill text-danger"></i>
                    </div>
                    <div class="col-8">Get Cabs</div>
                    <div class="col-2">
                      <i class="bi bi-caret-right-fill"></i>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/services">
                  <div class="row">
                    <div class="col-2">
                      <i class="bi bi-car-front-fill text-danger"></i>
                    </div>
                    <div class="col-8">Services</div>
                    <div class="col-2">
                      <i class="bi bi-caret-right-fill"></i>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/about">
                  <div class="row">
                    <div class="col-2">
                      <i class="bi bi-car-front-fill text-danger"></i>
                    </div>
                    <div class="col-8">About</div>
                    <div class="col-2">
                      <i class="bi bi-caret-right-fill"></i>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="nav-link" href="http://localhost:3000/contact">
                  <div class="row">
                    <div class="col-2">
                      <i class="bi bi-car-front-fill text-danger"></i>
                    </div>
                    <div class="col-8">Contact</div>
                    <div class="col-2">
                      <i class="bi bi-caret-right-fill"></i>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
}
