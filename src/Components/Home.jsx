import React, { useEffect, useState } from "react";
import "./Home.css";
import TeximonialSlider from "./TeximonialSlider";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./Mobile/MobileHeader";
import { isMobile } from "react-device-detect";
import BannerSlider from "./BannerSlider";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css"; // Import AOS CSS
import { Modal, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gallery from "./Gallery";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

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

  const [faq, setFaq] = useState([]);
  console.log(faq);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/faq").then((res) => {
      return setFaq(res.data.data);
    });
  }, []);

  const [taxi, setTaxi] = useState([]);
  console.log(taxi);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/taxi").then((res) => {
      return setTaxi(res.data.data);
    });
  }, []);

  const [packages, setPackages] = useState([]);
  console.log(packages);
  useEffect(() => {
    console.log(setPackages);
    axios.get("https://admin.rockriders.in/api/packages").then((res) => {
      return setPackages(res.data.data);
    });
  }, []);

  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/services").then((res) => {
      return setServices(res.data.data);
    });
  }, []);

  const [about, setAbout] = useState([]);
  // console.log(about);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/about").then((res) => {
      return setAbout(res.data.data);
    });
  }, []);

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
  };

  const [isOpen, setIsOpen] = useState(false); // Modal open state

  useEffect(() => {
    // Optional: Delay popup display for a smoother user experience
    setTimeout(() => setIsOpen(true), 200); // Adjust delay as needed
  }, []); // Empty dependency array ensures it runs only once

  const handleClose = () => setIsOpen(false);

  //  form
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    type: "Passenger",
    pickup: "", // corrected typo: picup to pickup
    drop: "",
    bookingDate: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post(
        "https://admin.rockriders.in/api/book-ride",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Form submited successfully");
      } else {
        // Error handling
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //form date
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({ ...formData, bookingDate: date });
  };

  
  //about
  const truncateText = (text, length) => {
    if (!text) return ""; // Check if text is undefined or null
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <>
        <BannerSlider />

        <div className="form">
          <form className="box py-5" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="input-group">
                    <i className="fa-solid fa-person icon-inside"></i>
                    <input
                      type="text"
                      className="custom-input"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="tel"
                      className="custom-input"
                      name="mobile"
                      placeholder="Mobile No."
                      maxLength="10"
                      pattern="\d{10}"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <i className="fas fa-phone icon-inside"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Pickup"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                    />
                    <i className="fa-solid fa-location-dot icon-inside"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Drop"
                      name="drop"
                      value={formData.drop}
                      onChange={handleChange}
                    />
                    <i className="fa-solid fa-location-dot icon-inside"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group custom-select-container">
                    <select
                      className="form-select"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="Passenger">Passenger</option>
                      <option value="1 Person">1 Person</option>
                      <option value="2 Person">2 Person</option>
                      <option value="3 Person">3 Person</option>
                      <option value="4 Person">4 Person</option>
                      <option value="5 Person">5 Person</option>
                    </select>
                    <i className="fa-solid fa-users icon-inside"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="input-group">
                    {/* <i className="fa-solid fa-calendar-days icon-inside"></i> */}
                    <i className="fa-solid fa-calendar-days icon-insidess"></i>
                    <DatePicker
                      selected={selectedDate}
                      dateFormat="dd-MM-yyyy"
                      className="custom-inputs"
                      placeholderText="Booking Date"
                      name="bookingDate"
                      value={formData.bookingDate}
                      onChange={handleDateChange}
                      minDate={new Date()}
                    />
                    {/* Use a valid FontAwesome icon */}
                  </div>
                </div>
              </div>
            </div>
            <a href="submit" className="theme-btn">
              Book Taxi
              <i className="fas fa-arrow-right" />
            </a>
          </form>
          {/* Toast container */}
          <ToastContainer />
        </div>

        <div className="about-area " style={{ backgroundColor: "white" }}>
          <div className="container py-2">
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncateText(about.paragraph1, 106),
                    }}
                  />
                  {/* <p className="about-text">{truncateText(about.paragraph1, 106)}</p> */}
                  <a href="/about" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Gallery />

        <TeximonialSlider />

        <div className="taxi-area py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title"> Check Available Taxi</h2>
                  <div className="heading-divider" />
                </div>
              </div>
            </div>
            <div className="row filter-box">
              {taxi &&
                taxi.map((taxi, key) => (
                  <div
                    className="col-md-6 col-lg-4 filter-item cat1 cat2"
                    data-aos="fade-up"
                  >
                    <div className="taxi-item">
                      <div className="taxi-img">
                        <img
                          src={`https://admin.rockriders.in/${taxi.image}`}
                        />
                      </div>
                      <div className="taxi-content">
                        <div className="taxi-head">
                          <h4>{taxi.service_title}</h4>
                          <p className="">{taxi.desc}</p>
                          <span>{taxi.price}</span>
                        </div>
                        <a
                          href="#"
                          className="theme-btn show-modal"
                          onClick={() => setShowModal(true)}
                        >
                          Contact
                          <i className="fas fa-arrow-right" />
                        </a>
                        <Modal
                          show={showModal}
                          onHide={handleModalClose}
                          id="myModal"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="myModalLabel"
                        >
                          <Modal.Header closeButton></Modal.Header>
                          <Modal.Body>
                            <form onSubmit={handleSubmit}>
                              <div className="row 3">
                                <div className="col-lg-12 ">
                                  <div className="form-group">
                                    <div className="input-group">
                                      <i className="fa-solid fa-person icon-inside"></i>
                                      <input
                                        type="text"
                                        className="custom-input"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <div className="input-group">
                                      <input
                                        type="tel"
                                        className="custom-input"
                                        name="mobile"
                                        placeholder="Mobile No."
                                        maxLength="10"
                                        pattern="\d{10}"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                      />
                                      <i className="fas fa-phone icon-inside"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="Pickup"
                                        name="pickup"
                                        value={formData.pickup}
                                        onChange={handleChange}
                                      />
                                      <i className="fa-solid fa-location-dot icon-inside"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="Drop"
                                        name="drop"
                                        value={formData.drop}
                                        onChange={handleChange}
                                      />
                                      <i className="fa-solid fa-location-dot icon-inside"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <div className="input-group custom-select-container">
                                      <select
                                        className="form-select"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                      >
                                        <option value="Passenger">
                                          Passenger
                                        </option>
                                        <option value="1 Person">
                                          1 Person
                                        </option>
                                        <option value="2 Person">
                                          2 Person
                                        </option>
                                        <option value="3 Person">
                                          3 Person
                                        </option>
                                        <option value="4 Person">
                                          4 Person
                                        </option>
                                        <option value="5 Person">
                                          5 Person
                                        </option>
                                      </select>
                                      <i className="fa-solid fa-users icon-inside"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <div className="input-group">
                                      <DatePicker
                                        selected={selectedDate}
                                        dateFormat="dd-MM-yyyy"
                                        className="custom-inputs"
                                        placeholderText="Booking Date"
                                        name="bookingDate"
                                        value={formData.bookingDate}
                                        onChange={handleDateChange}
                                        minDate={new Date()}
                                      />
                                      <i className="fa-solid fa-calendar-days icon-inside"></i>{" "}
                                      {/* Use a valid FontAwesome icon */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <button className="theme-btn " type="submit">
                                  Book Taxi
                                  <i className="fas fa-arrow-right" />
                                </button>
                              </div>
                            </form>
                          </Modal.Body>
                          <ToastContainer />
                        </Modal>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="taxi-rate py-3 mb-5"
          style={{ backgroundColor: "white" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title"> Taxi Packages For You</h2>
                  <div className="heading-divider" />
                </div>
              </div>
            </div>
            <div className="row">
              {packages &&
                packages.map((packages, key) => (
                  <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <div
                      className="rate-item wow fadeInUp"
                      data-wow-delay=".25s"
                    >
                      {/* <div className="rate-header">
                        <div className="rate-img">
                          <img src="assets/img/rate/01.png" alt="" />
                        </div>
                      </div> */}
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
                              <i className="far fa-check-double" /> Up To 50
                              kms: <span>$1.38/km</span>
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
                          <a
                            href="#"
                            className="theme-btn show-modal"
                            onClick={() => setShowModal(true)}
                          >
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

        <div id="formbox">
      <div className="booking-area p-3" style={{ paddingTop: '40px', backgroundColor: '#E0E3E8' }}>
        <div className="row">
          <div className="col-md-5">
            <img src="assets/img/images/form.jpg" alt="Form" />
          </div>
          <div className="col-md-7 py-1" style={{ backgroundColor: 'rgb(48 69 128)' }}>
            <h2 className="site-title text-white mb-3" style={{ left: '20px' }}>
              Book your ride now!
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="row" style={{ marginRight: '0%', marginLeft: '0%' }}>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-phone"></i>
                        </span>
                      </div>
                      <input
                        type="tel"
                        className="form-control"
                        name="mobile"
                        placeholder="Mobile No."
                        maxLength="10"
                        pattern="\d{10}"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-location-dot"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pickup"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-location-dot"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Drop"
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-users"></i>
                        </span>
                      </div>
                      <select
                        className="form-control"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                      >
                        <option value="Passenger">Passenger</option>
                        <option value="1 Person">1 Person</option>
                        <option value="2 Person">2 Person</option>
                        <option value="3 Person">3 Person</option>
                        <option value="4 Person">4 Person</option>
                        <option value="5 Person">5 Person</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-calendar-alt"></i>
                        </span>
                      </div>
                      <DatePicker
                        selected={selectedDate}
                        dateFormat="dd-MM-yyyy"
                        className="form-controls"
                        placeholderText="Booking Date"
                        name="bookingDate"
                        onChange={handleDateChange}
                        value={formData.bookingDate}
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="align-center my-5" style={{ marginLeft: '0%' }}>
                <button className="theme-btn" type="submit">
                  Book Taxi
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </form>
            {/* Toast container */}
            <ToastContainer />
          </div>
        </div>
      </div>
        </div>

        <div className="cta-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-start">
                <div className="cta-text cta-divider">
                  <h1>Book Your Cab It's Simple And Affordable</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout point of using is that it has normal distribution
                    of letters.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 text-center text-lg-end">
                <div className="mb-20">
                  <a href="#" className="cta-number">
                    <i className="fas fa-headset" /> +91 7309619301
                  </a>
                </div>
                <div className="cta-btn">
                  <a
                    href="#"
                    className="theme-btn"
                    onClick={() => setShowModal(true)}
                  >
                    Book Your Cab
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14234.213846522938!2d80.94428829614023!3d26.885924765022146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdigital%20nawab!5e0!3m2!1sen!2sin!4v1715261460127!5m2!1sen!2sin"
            width="100%"
            height="600"
            style={{ border: "0;" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={`popup ${isOpen ? "show" : ""}`}>
          <div className="popup-content">
            {/* Your popup content here */}
            <div class="close-button-container">
              <button
                type="button"
                class="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <form className="box py-5" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fa-solid fa-person icon-inside"></i>
                      <input
                        type="text"
                        className="custom-input"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="tel"
                        className="custom-input"
                        name="mobile"
                        placeholder="Mobile No."
                        maxLength="10"
                        pattern="\d{10}"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      <i className="fas fa-phone icon-inside"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Pickup"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                      />
                      <i className="fa-solid fa-location-dot icon-inside"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Drop"
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                      />
                      <i className="fa-solid fa-location-dot icon-inside"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group custom-select-container">
                      <select
                        className="form-select"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                      >
                        <option value="Passenger">Passenger</option>
                        <option value="1 Person">1 Person</option>
                        <option value="2 Person">2 Person</option>
                        <option value="3 Person">3 Person</option>
                        <option value="4 Person">4 Person</option>
                        <option value="5 Person">5 Person</option>
                      </select>
                      <i className="fa-solid fa-users icon-inside"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fa-solid fa-calendar-days icon-insidess"></i>
                      <DatePicker
                        selected={selectedDate}
                        dateFormat="dd-MM-yyyy"
                        className="custom-inputs"
                        placeholderText="Booking Date"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                      />
                      {/* Use a valid FontAwesome icon */}
                    </div>
                  </div>
                </div>
              </div>
              <a href="submit" className="theme-btn">
                Book Taxi
                <i className="fas fa-arrow-right" />
              </a>
            </form>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
}
