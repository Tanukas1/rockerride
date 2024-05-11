import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./Mobile/MobileHeader";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isMobile } from "react-device-detect";

export default function GetCabs() {
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
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      <div className="booking-area py-5" >
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

      <Footer />
    </>
  );
}
