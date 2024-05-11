import React from "react";
import TeximonialSlider from "../TeximonialSlider";
import "./Mobile.css";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

export default function MobileHome() {
  const mapStyles = {
    height: "80vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.748817,
    lng: -73.985428,
  };
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    // Fetch user's current location using the browser's geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error("Error getting current location:", error)
    );
  }, []);

  const polygonCoordinates = [
    { lat: 40.748817, lng: -73.985428 },
    // Add more coordinates as needed
  ];

  return (
    <>
      <div className="card shadow-lg bg-white" style={{ height: "43rem" }}>
        <div className="container">
          <div className="card mb-4">
            <LoadScript googleMapsApiKey="AIzaSyDobn-D4ndPtHUStpfpRC9uvBrJNW8C7qA">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={currentLocation || defaultCenter}
              >
                {currentLocation && <Marker position={currentLocation} />}
                <Polygon
                  paths={polygonCoordinates}
                  options={{
                    fillColor: "#008000", // Green color for the covered area
                    fillOpacity: 0.35,
                    strokeColor: "#006400", // Dark green color for the border
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                  }}
                />
              </GoogleMap>
            </LoadScript>
          </div>
          <form>
            <div
              className="card-img-overlay"
              style={{ position: "relative", top: "-33rem" }}
            >
              <input
                type=""
                className="form-control mb-3"
                placeholder="PickUp Location"
              />
              <input
                type=""
                className="form-control"
                placeholder="Drop Location"
              />
            </div>
          </form>
          <div className="confirm-booking" style={{ marginTop: "-8.5rem" }}>
            <a
              className="btn btn-danger text-white rounded-pill w-100"
              href="/MobileBookCabs"
            >
              Confirm Booking
            </a>
          </div>
        </div>
      </div>

      <div
        className="booking-area py-5"
        style={{ marginTop: "40px", backgroundColor: "white" }}
      >
        <div className="container">
          <div
            className="booking-form shadow-lg"
            style={{ backgroundColor: " #121244" }}
          >
            <h4 className="booking-title text-center mb-4 text-white">
              Book Your Ride
            </h4>
            <form action="#">
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="text-white">Pick Up City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pic Up City"
                    />
                    <i
                      className="far fa-location-dot"
                      style={{ bottom: "13px" }}
                    ></i>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="text-white">Drop City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Drop City"
                    />
                    <i
                      className="far fa-location-dot"
                      style={{ bottom: "13px" }}
                    ></i>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="text-white">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                    <i class="fa-solid fa-phone" style={{ bottom: "13px" }}></i>
                  </div>
                </div>
                {/* <div className="col-lg-3">
            <div className="form-group">
              <label className='text-white'> Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
              <i class="fa-solid fa-person"></i>
            </div>
          </div> */}
              </div>
              <div className="col-lg-3 align-center my-5">
                <button className="theme-btn shadow but" type="submit">
                  Book Taxi
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="about-area py-4" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                <div className="about-img">
                  <img src="assets/img/about/01.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-right wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="site-heading mb-3">
                  <span className="site-title-tagline justify-content-start">
                    <i className="flaticon-drive" /> About Us
                  </span>
                  <h2 className="site-title">
                    We Provide Trusted <span>Cab Service</span> In The World
                  </h2>
                </div>
                <p className="about-text">
                  We have a wide range of A/C luxury cabs for personal and
                  corporate use for travel in Lucknow and interstate journey. If
                  you don’t want to wait for a cab, you can call Usha Cab
                  Service for Comfort. Our Cabs in Lucknow are always available
                  at your service. You may also choose us for Lucknow Tour, we
                  have devised special packages for your needs.
                </p>
                <p className="about-text">
                  Transportation is one such facility which provides access to
                  other amenities. In Lucknow, you could spot a no of reliable
                  transportation facilities, ranging from e rickshaw to
                  metro.These all have their cost-effectiveness as well as time
                  schedule issues along the range of movement. Commercial taxi
                  provides a great means of transportation in the city.
                </p>
                <p className="about-text">
                  Taxi in Lucknow can be easily availed by just calling at our
                  customer care. Which can help in saving lots of time and
                  provide a comfortable travel option from the doorstep to the
                  far-flung location in and outside Lucknow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area bg py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Services</span>
                <h2 className="site-title">Our Best Services For You</h2>
                <div className="heading-divider" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="service-item wow fadeInUp" data-wow-delay=".25s">
                <div className="service-img">
                  <img src="assets/img/service/01.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Online Booking</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="theme-btn">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item wow fadeInUp" data-wow-delay=".50s">
                <div className="service-img">
                  <img src="assets/img/service/02.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">City Transport</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="theme-btn">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item wow fadeInUp" data-wow-delay=".75s">
                <div className="service-img">
                  <img src="assets/img/service/03.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Airport Transport</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="theme-btn">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item wow fadeInUp" data-wow-delay=".25s">
                <div className="service-img">
                  <img src="assets/img/service/04.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Business Transport</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="theme-btn">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item wow fadeInUp" data-wow-delay=".50s">
                <div className="service-img">
                  <img src="assets/img/service/05.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Regular Transport</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="theme-btn">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item wow fadeInUp" data-wow-delay=".75s">
                <div className="service-img">
                  <img src="assets/img/service/06.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Tour Transport</a>
                  </h3>
                  <p className="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="theme-btn">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="taxi-rate py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Packages</span>
                <h2 className="site-title"> Taxi Packages For You</h2>
                <div className="heading-divider" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="rate-item wow fadeInUp" data-wow-delay=".25s">
                <div className="rate-header">
                  <div className="rate-img">
                    <img src="assets/img/rate/01.png" alt="" />
                  </div>
                </div>
                <div
                  className="rate-header-content"
                  style={{ margin: "30px 0 30px" }}
                >
                  <h4>Basic Pakage</h4>
                  <p className="rate-duration">One Time Payment</p>
                </div>
                <div className="rate-content">
                  <div className="rate-feature">
                    <ul>
                      <li>
                        <i className="far fa-check-double" /> Base Charge:{" "}
                        <span>$2.30</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Distance
                        Allowance: <span>5000m</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Up To 50 kms:{" "}
                        <span>$1.38/km</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Booking Fee:{" "}
                        <span>$0.99</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Extra Passangers:{" "}
                        <span>$0.45</span>
                      </li>
                    </ul>
                    <a href="#" className="theme-btn">
                      Choose Plan
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="rate-item wow fadeInDown" data-wow-delay=".25s">
                <div className="rate-header">
                  <div className="rate-img">
                    <img src="assets/img/rate/01.png" alt="" />
                  </div>
                </div>
                <div
                  className="rate-header-content"
                  style={{ margin: "30px 0 30px" }}
                >
                  <h4>Standard Pakage</h4>
                  <p className="rate-duration">One Time Payment</p>
                </div>
                <div className="rate-content">
                  <div className="rate-feature">
                    <ul>
                      <li>
                        <i className="far fa-check-double" /> Base Charge:{" "}
                        <span>$2.30</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Distance
                        Allowance: <span>5000m</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Up To 50 kms:{" "}
                        <span>$1.38/km</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Booking Fee:{" "}
                        <span>$0.99</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Extra Passangers:{" "}
                        <span>$0.45</span>
                      </li>
                    </ul>
                    <a href="#" className="theme-btn">
                      Choose Plan
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="rate-item wow fadeInUp" data-wow-delay=".25s">
                <div className="rate-header">
                  <div className="rate-img">
                    <img src="assets/img/rate/01.png" alt="" />
                  </div>
                </div>
                <div
                  className="rate-header-content"
                  style={{ margin: "30px 0 30px" }}
                >
                  <h4>Premium Pakage</h4>
                  <p className="rate-duration">One Time Payment</p>
                </div>
                <div className="rate-content">
                  <div className="rate-feature">
                    <ul>
                      <li>
                        <i className="far fa-check-double" /> Base Charge:{" "}
                        <span>$2.30</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Distance
                        Allowance: <span>5000m</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Up To 50 kms:{" "}
                        <span>$1.38/km</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Booking Fee:{" "}
                        <span>$0.99</span>
                      </li>
                      <li>
                        <i className="far fa-check-double" /> Extra Passangers:{" "}
                        <span>$0.45</span>
                      </li>
                    </ul>
                    <a href="#" className="theme-btn">
                      Choose Plan
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area feature-bg py-5">
        <div className="container mt-150">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Feature</span>
                <h2 className="site-title text-white">Our Awesome Feature</h2>
                <div className="heading-divider" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="feature-item wow fadeInUp" data-wow-delay=".25s">
                <div className="feature-icon">
                  <img src="assets/img/icon/taxi-safety.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h4>Safety Guarantee</h4>
                  <p>
                    There are many variations of majority have suffered
                    alteration in some form injected humour randomised words.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="feature-item mt-lg-5 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/pickup.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h4>Fast Pickup</h4>
                  <p>
                    There are many variations of majority have suffered
                    alteration in some form injected humour randomised words.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-item wow fadeInUp" data-wow-delay=".25s">
                <div className="feature-icon">
                  <img src="assets/img/icon/money.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h4>Affordable Rate</h4>
                  <p>
                    There are many variations of majority have suffered
                    alteration in some form injected humour randomised words.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="feature-item mt-lg-5 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/support.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h4>24/7 Support</h4>
                  <p>
                    There are many variations of majority have suffered
                    alteration in some form injected humour randomised words.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="taxi-area py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Our Taxi</span>
                <h2 className="site-title"> Check Available Taxi</h2>
                <div className="heading-divider" />
              </div>
            </div>
          </div>
          <div className="row filter-box">
            <div className="col-md-6 col-lg-3 filter-item cat1 cat2">
              <div className="taxi-item">
                <div className="taxi-img">
                  <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                  <div className="taxi-head">
                    <h4>AURA</h4>
                    <p className="">
                      Hyundai Aura for a driver around the city at your services
                    </p>
                    <span>12/km</span>
                  </div>
                  <a href="#" className="theme-btn">
                    Contact
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 filter-item cat3 cat4">
              <div className="taxi-item">
                <div className="taxi-img">
                  <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                  <div className="taxi-head">
                    <h4>TATA ZEST</h4>
                    <p className="">
                      Hyundai Aura for a driver around the city at your services
                    </p>
                    <span>11/km</span>
                  </div>
                  <a href="#" className="theme-btn">
                    Contact
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 filter-item cat1 cat4">
              <div className="taxi-item">
                <div className="taxi-img">
                  <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                  <div className="taxi-head">
                    <h4>ERTIGA</h4>
                    <p className="">
                      Hyundai Aura for a driver around the city at your services
                    </p>
                    <span>14/km</span>
                  </div>
                  <a href="#" className="theme-btn">
                    Contact
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 filter-item cat1 cat3">
              <div className="taxi-item">
                <div className="taxi-img">
                  <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                  <div className="taxi-head">
                    <h4>Swift Dzire</h4>
                    <p className="">
                      Hyundai Aura for a driver around the city at your services
                    </p>
                    <span>11/km</span>
                  </div>
                  <a href="#" className="theme-btn">
                    Contact
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-area py-">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <div
                  className="site-heading wow fadeInDown mb-4"
                  data-wow-delay=".25s"
                >
                  <span className="site-title-tagline text-white justify-content-start">
                    <i className="flaticon-drive" /> Why Choose Us
                  </span>
                  <h2 className="site-title text-white mb-10">
                    We are dedicated <span>to provide</span> quality service
                  </h2>
                  <p className="text-white">
                    There are many variations of passages available but the
                    majority have suffered alteration in some form going to use
                    a passage by injected humour randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="choose-img wow fadeInUp" data-wow-delay=".25s">
                  <img src="assets/img/choose/01.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="choose-content-wrapper wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="choose-item">
                  <div className="choose-item-info">
                    <h3>Best Quality Taxi</h3>
                    <p>
                      There are many variations of passages available but the
                      majority have suffered alteration in form injected humour
                      words which don't look even slightly believable. If you
                      are going passage you need there anything embar.
                    </p>
                  </div>
                </div>
                <div className="choose-item ms-lg-5">
                  <div className="choose-item-info">
                    <h3>Expert Drivers</h3>
                    <p>
                      There are many variations of passages available but the
                      majority have suffered alteration in form injected humour
                      words which even slightly believable. If you are going
                      passage you need there anything.
                    </p>
                  </div>
                </div>
                <div className="choose-item mb-lg-0">
                  <div className="choose-item-info">
                    <h3>Many Locations</h3>
                    <p>
                      There are many variations of passages available but the
                      majority have suffered alteration in form injected humour
                      words which don't look even slightly believable. If you
                      are going passage you need there anything embar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-area py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-right">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline justify-content-start">
                    Faq's
                  </span>
                  <h2 className="site-title my-3">
                    General <span>frequently</span> asked questions
                  </h2>
                </div>
                <p className="about-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even.
                </p>
                <div className="faq-img mt-3">
                  <img src="assets/img/faq/01.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>
                        <i className="far fa-question" />
                      </span>{" "}
                      How Long Does A Booking Take ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire. Ante odio dignissim
                      quam, vitae pulvinar turpis erat ac elit eu orci id odio
                      facilisis pharetra.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>
                        <i className="far fa-question" />
                      </span>{" "}
                      How Can I Become A Member ?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire. Ante odio dignissim
                      quam, vitae pulvinar turpis erat ac elit eu orci id odio
                      facilisis pharetra.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>
                        <i className="far fa-question" />
                      </span>{" "}
                      What Payment Gateway You Support ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire. Ante odio dignissim
                      quam, vitae pulvinar turpis erat ac elit eu orci id odio
                      facilisis pharetra.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span>
                        <i className="far fa-question" />
                      </span>{" "}
                      How Can I Cancel My Request ?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire. Ante odio dignissim
                      quam, vitae pulvinar turpis erat ac elit eu orci id odio
                      facilisis pharetra.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeximonialSlider />

      <div className="cta-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center text-lg-start">
              <div className="cta-text cta-divider">
                <h1>Book Your Cab It's Simple And Affordable</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                  point of using is that it has normal distribution of letters.
                </p>
              </div>
            </div>
            <div className="col-lg-5 text-center text-lg-end">
              <div className="mb-20">
                <a href="#" className="cta-number">
                  <i className="far fa-headset" />
                  +2 123 654 7898
                </a>
              </div>
              <div className="cta-btn">
                <a href="#" className="theme-btn">
                  Book Your Cab
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
