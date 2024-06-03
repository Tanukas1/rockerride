import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./Mobile/MobileHeader";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isMobile } from "react-device-detect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      <div className="booking-area py-5" >
        <div className="row">
            <div className="col-md-5 py-5">
              <img
                src="assets/img/images/form,.jpg"
                alt=""
              />
            </div>
            <div className="col-md-7 py-5" style={{ backgroundColor: 'rgb(48 69 128)' }}>
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

      <Footer />
    </>
  );
}
