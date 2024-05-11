import React, { useEffect, useState,  } from "react";
import "./Home.css";
import TeximonialSlider from "./TeximonialSlider";
import axios from "axios";
import Header from "./Header";
import MobileHome from "./Mobile/MobileHome";
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

  //  form

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    type: "Passenger",
    pickup: "", // corrected typo: picup to pickup
    drop: "",
    BookingDate: "",
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

  // gallery
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-bs-theme', 'light');
  }, []);

  const handleEnlarge = () => {
    setIsFullscreen(true);
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
  };

    return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <>
        <BannerSlider />


        <div className="card2">
          <div class="container py-5 w">
            <div className="">
              <form class="p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit} style={{padding:"20px"}}>
                <div className="row">
                  <div className="col-md-6">
                    <div class="mb-3">
                      <label>Your Name</label>
                      <input type="text" class="form-control"  name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="mb-3">
                      <label>Phone</label>
                      <input type="number" class="form-control" name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                <label>Passenger</label>
                    <div class="mb-3">
                        <select className="form-control" name="type" value={formData.type} onChange={handleChange}>
                            <option value="Passenger"></option>
                            <option value="1 Person">1 Person</option>
                            <option value="2 Person">2 Person</option>
                            <option value="3 Person">3 Person</option>
                            <option value="4 Person">4 Person</option>
                            <option value="5 Person">5 Person</option>
                        </select>
                    </div>
                  </div>
                 
                  <div className="col-md-6">
                    <div class="mb-3">
                      <label >Start Destination</label>
                      <input type="location" class="form-control"  name="pickup"
                          value={formData.pickup}
                          onChange={handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div class="mb-3">
                      <label>End Destination</label>
                      <input type="location" class="form-control"  name="drop"
                          value={formData.drop}
                          onChange={handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div class="mb-3">
                      <label>Booking Date</label>
                      <input type="date" class="form-control"  name="bookingDate"
                          value={formData.bookingDate}
                          onChange={handleChange}/>
                    </div>
                  </div>
                </div>
                <button type="submit" class="w-50 btn btn-lg btn-primary rounded-pill">Book Taxi<i className="fas fa-arrow-right" /></button>
              </form>
                {/* Toast container */}
                <ToastContainer />
            </div>
          </div>
        </div>

        <div className="about-area py-" style={{ backgroundColor: "white" }}>
          <div className="container py-5">
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
                  <a href="/about" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-5">
          <div className="site-heading text-center">
            <span className="site-title-tagline">Gallery</span>
            <h2 className="site-title">Our Best Gallery For You</h2>
            <div className="heading-divider" />
          </div>
          <section className="photo-gallery">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 gallery-grid mb-5">
                {/* Gallery items */}
                <div className="col">
                  <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                    <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                  </a>
                </div>
                <div className="col">
                  <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                    <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                  </a>
                </div>
                <div className="col">
                  <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                    <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                  </a>
                </div>
                <div className="col">
                  <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                    <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                  </a>
                </div>
                <div className="col">
                  <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                    <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                  </a>
                </div>
                <div className="col">
                  <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                    <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                  </a>
                </div>
                {/* More gallery items */}
              </div>
            </div>
          </section>
          <div className={`modal fade lightbox-modal ${isFullscreen ? 'show' : ''}`} id="lightbox-modal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen">
              <div className="modal-content">
                {isFullscreen ? (
                  <button type="button" className="btn-fullscreen-exit" aria-label="Exit fullscreen" onClick={handleExitFullscreen}>
                    <svg className="bi"><use href="#exit" /></svg>
                  </button>
                ) : (
                  <button type="button" className="btn-fullscreen-enlarge" aria-label="Enlarge fullscreen" onClick={handleEnlarge}>
                    <svg className="bi"><use href="#enlarge" /></svg>
                  </button>
                )}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body">
                  <div className="lightbox-content">
                    {/* JS content here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SVG symbols */}
          <svg className="d-none" xmlns="http://www.w3.org/2000/svg">
            <symbol id="enlarge" viewBox="0 0 16 16">
              {/* Enlarge icon path */}
            </symbol>
            <symbol id="exit" viewBox="0 0 16 16">
              {/* Exit icon path */}
            </symbol>
          </svg>
        </div>
      
        <TeximonialSlider />

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
                          className="theme-btn  show-modal "
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
                          <Modal.Header closeButton>
                            <Modal.Title id="myModalLabel">
                              Login Form
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <form onSubmit={handleSubmit}>
                              <div className="row 3">
                                <div className="col-lg-12 ">
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="fa-solid fa-person"></i>
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="fas fa-phone"></i>
                                        </span>
                                      </div>
                                      <input
                                        type="number"
                                        class="form-control"
                                        name="mobile"
                                        placeholder="Phone"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 ">
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="fa-solid fa-people-simple"></i>
                                        </span>
                                      </div>
                                      <select
                                        className="form-control"
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
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="fa-solid fa-location-dot"></i>
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Start Destination"
                                        name="pickup"
                                        value={formData.pickup}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="fa-solid fa-location-dot"></i>
                                        </span>
                                      </div>
                                      <input
                                        type="location"
                                        class="form-control"
                                        placeholder="End Destination"
                                        name="drop"
                                        value={formData.drop}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="fa-solid fa-calendar-days"></i>
                                        </span>
                                      </div>
                                      <input
                                        type="date"
                                        class="form-control"
                                        placeholder="Booking Date"
                                        name="bookingDate"
                                        value={formData.bookingDate}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className=" ">
                                <button
                                  className="theme-btn shadow"
                                  type="submit"
                                >
                                  Book Taxi
                                  <i className="fas fa-arrow-right" />
                                </button>
                              </div>
                            </form>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="taxi-rate py-5" style={{ backgroundColor: "white" }}>
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
              {packages &&
                packages.map((packages, key) => (
                  <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <div
                      className="rate-item wow fadeInUp"
                      data-wow-delay=".25s"
                    >
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
                          <Modal
                            show={showModal}
                            onHide={handleModalClose}
                            id="myModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="myModalLabel"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="myModalLabel">
                                Login Form
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <form onSubmit={handleSubmit}>
                                <div className="row 3">
                                  <div className="col-lg-12 ">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-person"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          class="form-control"
                                          name="name"
                                          placeholder="Your Name"
                                          value={formData.name}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fas fa-phone"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="number"
                                          class="form-control"
                                          name="mobile"
                                          placeholder="Phone"
                                          value={formData.mobile}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 ">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-people-simple"></i>
                                          </span>
                                        </div>
                                        <select
                                          className="form-control"
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
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-location-dot"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Start Destination"
                                          name="pickup"
                                          value={formData.pickup}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-location-dot"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="location"
                                          class="form-control"
                                          placeholder="End Destination"
                                          name="drop"
                                          value={formData.drop}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-calendar-days"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="date"
                                          class="form-control"
                                          placeholder="Booking Date"
                                          name="bookingDate"
                                          value={formData.bookingDate}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" ">
                                  <button
                                    className="theme-btn shadow"
                                    type="submit"
                                  >
                                    Book Taxi
                                    <i className="fas fa-arrow-right" />
                                  </button>
                                </div>
                              </form>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="booking-area py-5" style={{ paddingTop: "40px", backgroundColor: "#E0E3E8" }}>
          <div className="row">
            <div className="col-md-6 py-5">
              <img
                src="https://wp.dynamiclayers.net/ridek/wp-content/uploads/sites/2/2023/11/car-2.png"
                alt=""
              />
            </div>
            <div className="col-md-6 py-5" style={{ backgroundColor: "rgb(48 69 128)" }}>
              <span className="site-title-tagline">Online Booking</span>
              <h2 className="site-title text-white mb-3">
                Book your ride now!
              </h2>
              <form onSubmit={handleSubmit}>
                <div
                  className="row 3"
                  style={{ marginRight: "0%", marginLeft: "0%" }}
                >
                  <div className="col-lg-6">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa-solid fa-person"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-phone"></i>
                          </span>
                        </div>
                        <input
                          type="number"
                          class="form-control"
                          name="mobile"
                          placeholder="Phone"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa-solid fa-people-simple"></i>
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
                  <div className="col-lg-6 ">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa-solid fa-location-dot"></i>
                          </span>
                        </div>
                        <input
                          type="location"
                          class="form-control"
                          placeholder="Start Destination"
                          name="pickup"
                          value={formData.pickup}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa-solid fa-location-dot"></i>
                          </span>
                        </div>
                        <input
                          type="location"
                          class="form-control"
                          placeholder="End Destination"
                          name="drop"
                          value={formData.drop}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa-solid fa-calendar-days"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          class="form-control"
                          placeholder="Booking Date"
                          name="bookingDate"
                          value={formData.bookingDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=" align-center my-5"
                  style={{ marginLeft: "-42%" }}
                >
                  <button className="theme-btn shadow but" type="submit">
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

       
        {/* <div className="service-area bg py-5">
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
              {services &&
                services.map((services, key) => (
                  <div className="col-md-6 col-lg-4 " data-aos="fade-up">
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay=".25s"
                    >
                      <div className="service-img">
                        <img
                          src={`https://admin.rockriders.in/${services.category_image}`}
                        />
                      </div>
                      <div className="service-content">
                        <h3 className="service-title">
                          <a href="#">{services.category_title}</a>
                        </h3>
                        <p className="service-text">
                          {services.category_description}
                        </p>
                        <div className="service-arrow">
                          <a
                            href="#"
                            className="theme-btn show-modal"
                            onClick={() => setShowModal(true)}
                          >
                            Read More
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
                            <Modal.Header closeButton>
                              <Modal.Title id="myModalLabel">
                                Login Form
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <form onSubmit={handleSubmit}>
                                <div className="row 3">
                                  <div className="col-lg-12 ">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-person"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          class="form-control"
                                          name="name"
                                          placeholder="Your Name"
                                          value={formData.name}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fas fa-phone"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="number"
                                          class="form-control"
                                          name="mobile"
                                          placeholder="Phone"
                                          value={formData.mobile}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 ">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-people-simple"></i>
                                          </span>
                                        </div>
                                        <select
                                          className="form-control"
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
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-location-dot"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Start Destination"
                                          name="pickup"
                                          value={formData.pickup}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-location-dot"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="location"
                                          class="form-control"
                                          placeholder="End Destination"
                                          name="drop"
                                          value={formData.drop}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-calendar-days"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="date"
                                          class="form-control"
                                          placeholder="Booking Date"
                                          name="bookingDate"
                                          value={formData.bookingDate}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" ">
                                  <button
                                    className="theme-btn shadow"
                                    type="submit"
                                  >
                                    Book Taxi
                                    <i className="fas fa-arrow-right" />
                                  </button>
                                </div>
                              </form>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div> */}

        {/* <div className="feature-area feature-bg py-5">
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
        </div> */}
  
        {/* <div className="choose-area py-5">
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
                        There are many variations of passages available but the
                        majority have suffered alteration in form injected
                        humour words which don't look even slightly believable.
                        If you are going passage you need there anything embar.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item ms-lg-5">
                    <div className="choose-item-info">
                      <h3>Expert Drivers</h3>
                      <p>
                        There are many variations of passages available but the
                        majority have suffered alteration in form injected
                        humour words which even slightly believable. If you are
                        going passage you need there anything.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item mb-lg-0">
                    <div className="choose-item-info">
                      <h3>Many Locations</h3>
                      <p>
                        There are many variations of passages available but the
                        majority have suffered alteration in form injected
                        humour words which don't look even slightly believable.
                        If you are going passage you need there anything embar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="faq-area py-5">
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
                    form, by injected humour, or randomised words which don't
                    look even.
                  </p>
                  <div className="faq-img mt-3">
                    <img src="assets/img/faq/01.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion" id="accordionExample">
                  {faq &&
                    faq.map((faqData, key) => (
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
                            {faqData.faq_question}
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {faqData.faq_answer}
                          </div>
                        </div>
                      </div>
                    ))}

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
                        pleasure of the moment, so blinded by desire. Ante odio
                        dignissim quam, vitae pulvinar turpis erat ac elit eu
                        orci id odio facilisis pharetra.
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
                        pleasure of the moment, so blinded by desire. Ante odio
                        dignissim quam, vitae pulvinar turpis erat ac elit eu
                        orci id odio facilisis pharetra.
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
                        pleasure of the moment, so blinded by desire. Ante odio
                        dignissim quam, vitae pulvinar turpis erat ac elit eu
                        orci id odio facilisis pharetra.
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div> */}

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

        <div className="container-fluid py-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14234.213846522938!2d80.94428829614023!3d26.885924765022146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdigital%20nawab!5e0!3m2!1sen!2sin!4v1715261460127!5m2!1sen!2sin" width="100%" height="600" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </>

      <Footer />
    </>
  );
}
