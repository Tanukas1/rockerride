import React, { useEffect, useState } from "react";
import "./Home.css";
import TeximonialSlider from "./TeximonialSlider";
import axios from "axios";
import Header from "./Header";
import MobileHome from "./Mobile/MobileHome";
import Footer from "./Footer";
import MobileHeader from "./Mobile/MobileHeader";
import MobileFooter from "./Mobile/MobileFooter";
import { isMobile } from "react-device-detect";
import BannerSlider from "./BannerSlider";

export default function Home() {
  

  // const[youtube, setYoutube] = useState([]);
  // console.log(youtube);
  // useEffect(() => {
  //   axios.get("https://admin.rockriders.in/api/youtube").then((res) => {
  //     return setYoutube(res.data.data);
  //   });
  // },[]);

  const [testimonial, setTestimonial] = useState([]);
  // console.log(testimonial);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/testimonial").then((res) => {
      return setTestimonial(res.data.data.data);
    });
  }, []);

  // const[faq, setFaq] = useState([]);
  // console.log(faq);
  // useEffect(() => {
  //   axios.get("https://admin.rockriders.in/api/faq").then((res) => {
  //     return setFaq();
  //   });
  // },[]);

  // const[taxi, setTaxi] = useState([]);
  // console.log(taxi);
  // useEffect(() => {
  //   axios.get("https://admin.rockriders.in/api/taxi").then((res) => {
  //     return setTaxi();
  //   });
  // },[]);

  const [packages, setPackages] = useState([]);
  console.log(packages);
  useEffect(() => {
    console.log(setPackages);
    axios.get("https://admin.rockriders.in/api/packages").then((res) => {
      return setPackages(res.data.data);
    });
  }, []);

  // const[services, setServices] = useState([]);
  // console.log(services);
  // useEffect(() =>{
  //   axios.get("https://admin.rockriders.in/api/services").then((res)=>{
  //     return setServices()
  //   });
  // },[]);

  const [about, setAbout] = useState([]);
  // console.log(about);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/about").then((res) => {
      return setAbout(res.data.data);
    });
  }, []);


  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      {isMobile ? (
        <MobileHome />
      ) : (
        <>
          <BannerSlider/>

          <div className="booking-area py-5"
            style={{ marginTop: "40px", backgroundColor: "white" }}>
            <div className="container">
              <div
                className="booking-form shadow-lg"
                style={{ backgroundColor: " #121244" }}>
                <h4 className="booking-title text-center mb-4 text-white">
                  Book Your Ride
                </h4>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="form-group">
                        <label className="text-white">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                        <i
                          class="fa-solid fa-phone"
                          style={{ bottom: "13px" }}
                        ></i>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-group">
                        <label className="text-white"> Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                        <i
                          class="fa-solid fa-person"
                          style={{ bottom: "13px" }}
                        ></i>
                      </div>
                    </div>
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

          <div className="about-area py-" style={{ backgroundColor: "white" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div
                    className="about-left wow fadeInLeft"
                    data-wow-delay=".25s"
                  >
                    <div className="about-img">
                      <img src={`https://admin.rockriders.in/${about.img1}`} />
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
                        <i className="flaticon-drive" /> {about.heading}
                      </span>
                      <h2 className="site-title">{about.title}</h2>
                    </div>
                    <p className="about-text">{about.paragraph1}</p>
                    <p className="about-text">{about.paragraph1}</p>
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
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="service-img">
                      <img src="assets/img/service/01.jpg" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <a href="#">Online Booking</a>
                      </h3>
                      <p className="service-text">
                        There are many variations of passages orem psum
                        available but the majority have suffered alteration in
                        some form by injected.
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
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".50s"
                  >
                    <div className="service-img">
                      <img src="assets/img/service/02.jpg" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <a href="#">City Transport</a>
                      </h3>
                      <p className="service-text">
                        There are many variations of passages orem psum
                        available but the majority have suffered alteration in
                        some form by injected.
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
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".75s"
                  >
                    <div className="service-img">
                      <img src="assets/img/service/03.jpg" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <a href="#">Airport Transport</a>
                      </h3>
                      <p className="service-text">
                        There are many variations of passages orem psum
                        available but the majority have suffered alteration in
                        some form by injected.
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
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="service-img">
                      <img src="assets/img/service/04.jpg" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <a href="#">Business Transport</a>
                      </h3>
                      <p className="service-text">
                        There are many variations of passages orem psum
                        available but the majority have suffered alteration in
                        some form by injected.
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
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".50s"
                  >
                    <div className="service-img">
                      <img src="assets/img/service/05.jpg" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <a href="#">Regular Transport</a>
                      </h3>
                      <p className="service-text">
                        There are many variations of passages orem psum
                        available but the majority have suffered alteration in
                        some form by injected.
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
                  <div
                    className="service-item wow fadeInUp"
                    data-wow-delay=".75s"
                  >
                    <div className="service-img">
                      <img src="assets/img/service/06.jpg" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <a href="#">Tour Transport</a>
                      </h3>
                      <p className="service-text">
                        There are many variations of passages orem psum
                        available but the majority have suffered alteration in
                        some form by injected.
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
                {packages && packages.map((packages, key) => (
                  
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
                      <h4>{packages.course_name}</h4>
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
                            <i className="far fa-check-double" /> Extra
                            Passangers: <span>$0.45</span>
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
                 ))}
              </div>
            </div>
          </div>

          <div className="feature-area feature-bg py-5">
            <div className="container mt-150">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="site-heading text-center">
                    <span className="site-title-tagline">Feature</span>
                    <h2 className="site-title text-white">
                      Our Awesome Feature
                    </h2>
                    <div className="heading-divider" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div
                    className="feature-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="feature-icon">
                      <img src="assets/img/icon/taxi-safety.svg" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Safety Guarantee</h4>
                      <p>
                        There are many variations of majority have suffered
                        alteration in some form injected humour randomised
                        words.
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
                        alteration in some form injected humour randomised
                        words.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div
                    className="feature-item wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="feature-icon">
                      <img src="assets/img/icon/money.svg" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Affordable Rate</h4>
                      <p>
                        There are many variations of majority have suffered
                        alteration in some form injected humour randomised
                        words.
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
                        alteration in some form injected humour randomised
                        words.
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
                          Hyundai Aura for a driver around the city at your
                          services
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
                          Hyundai Aura for a driver around the city at your
                          services
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
                          Hyundai Aura for a driver around the city at your
                          services
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
                          Hyundai Aura for a driver around the city at your
                          services
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

          <div className="choose-area py-5">
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
                        majority have suffered alteration in some form going to
                        use a passage by injected humour randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                    <div
                      className="choose-img wow fadeInUp"
                      data-wow-delay=".25s"
                    >
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
                          There are many variations of passages available but
                          the majority have suffered alteration in form injected
                          humour words which don't look even slightly
                          believable. If you are going passage you need there
                          anything embar.
                        </p>
                      </div>
                    </div>
                    <div className="choose-item ms-lg-5">
                      <div className="choose-item-info">
                        <h3>Expert Drivers</h3>
                        <p>
                          There are many variations of passages available but
                          the majority have suffered alteration in form injected
                          humour words which even slightly believable. If you
                          are going passage you need there anything.
                        </p>
                      </div>
                    </div>
                    <div className="choose-item mb-lg-0">
                      <div className="choose-item-info">
                        <h3>Many Locations</h3>
                        <p>
                          There are many variations of passages available but
                          the majority have suffered alteration in form injected
                          humour words which don't look even slightly
                          believable. If you are going passage you need there
                          anything embar.
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
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even.
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
                          We denounce with righteous indignation and dislike men
                          who are so beguiled and demoralized by the charms of
                          pleasure of the moment, so blinded by desire. Ante
                          odio dignissim quam, vitae pulvinar turpis erat ac
                          elit eu orci id odio facilisis pharetra.
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
                          We denounce with righteous indignation and dislike men
                          who are so beguiled and demoralized by the charms of
                          pleasure of the moment, so blinded by desire. Ante
                          odio dignissim quam, vitae pulvinar turpis erat ac
                          elit eu orci id odio facilisis pharetra.
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
                          We denounce with righteous indignation and dislike men
                          who are so beguiled and demoralized by the charms of
                          pleasure of the moment, so blinded by desire. Ante
                          odio dignissim quam, vitae pulvinar turpis erat ac
                          elit eu orci id odio facilisis pharetra.
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
                          We denounce with righteous indignation and dislike men
                          who are so beguiled and demoralized by the charms of
                          pleasure of the moment, so blinded by desire. Ante
                          odio dignissim quam, vitae pulvinar turpis erat ac
                          elit eu orci id odio facilisis pharetra.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
           <TeximonialSlider/>

          <div className="cta-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 text-center text-lg-start">
                  <div className="cta-text cta-divider">
                    <h1>Book Your Cab It's Simple And Affordable</h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout point of using is that it has normal
                      distribution of letters.
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
      )}
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}
