import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./Mobile/MobileHeader";
import { isMobile } from "react-device-detect";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Services() {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/services").then((res) => {
      return setServices(res.data.data);
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

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    // Add leading zero if month or day is less than 10
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      <div className="service-area bg py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <h2 className="site-title">Our Best Services For You</h2>
                <div className="heading-divider" />
              </div>
            </div>
          </div>
          <div className="row">
            {services &&
              services.map((services, key) => (
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
                        <a
                          href="#"
                          className="theme-btn show-modal"
                          onClick={() => setShowModal(true)}>
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
                                      <select className="form-select" name="type" value={formData.type} onChange={handleChange}>
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
                                <div className="col-lg-12">
                                <div className="form-group">
                                  <div className="input-group">
                                      <input
                                        type="date"
                                        className="custom-input"
                                        placeholder="Booking Date"
                                        name="bookingDate"
                                        value={formData.bookingDate}
                                        onChange={handleChange}
                                        min={getCurrentDate()}
                                      />
                                      <i className="fa-solid fa-calendar-days icon-inside"></i> {/* Use a valid FontAwesome icon */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <button
                                  className="theme-btn "
                                  type="submit"
                                >
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
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
