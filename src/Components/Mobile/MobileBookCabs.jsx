import React from "react";

export default function MobileBookCabs() {
  return (
    <div className="col-lg-4">
      <div
        className="card shadow-lg bg-white"
        style={{ height: "43rem", borderRadius: 50 }}
      >
        <div className="container">
          <div className="card mb-3" style={{ marginTop: 35 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56957.53322454336!2d80.9682781282039!3d26.844855564798443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd49fc60a843%3A0x92fc72e19b623f6a!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1705658499678!5m2!1sen!2sin"
              width=""
              height="300px"
            />
          </div>
          <div className="row text-center">
            <h4 className="mb-3">Start Your Journey</h4>
          </div>
          <div className="row ">
            <div className="col-5">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Country</option>
                <option value={1}>99</option>
                <option value={2}>91</option>
                <option value={3}>98</option>
              </select>
            </div>
            <div className="col-7">
              <div className="mb-3">
                <input
                  type=""
                  className="form-control"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
          </div>
          {/* <div className="" style={{ marginTop: 50 }}>
          <div className="row m-1">
            <button
              type="button"
              className="btn w-50 rounded-pill text-white"
              style={{ backgroundColor: "#3b5998" }}
            >
              Facebook
            </button>
            <button type="button" className="btn btn-primary w-50 rounded-pill">
              Twitter
            </button>
          </div>
        </div> */}
          <div class="mt-5">
            <button
              type="button"
              className="btn btn-success w-100 rounded-pill"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
