import React from 'react'

export default function MobileGetCabs() {
  return (
    <>
    <header/>
    
    <div className="booking-area mb-5" style={{ marginTop: "40px" }}>
    <div className="container">
      <div className="booking-form shadow-lg" style={{ backgroundColor: " #121244"}}>
      <h4 className="booking-title text-center mb-4 text-white">Book Your Ride</h4>
      <form action="#">
      <div className="row">
      <div className="col-lg-3">
          <div className="form-group">
            <label className='text-white'>Pick Up City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pic Up City"
            />
           <i className="far fa-location-dot" style={{bottom: "13px"}}></i>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group">
            <label className='text-white'>Drop City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Drop City"
            />
           <i className="far fa-location-dot" style={{bottom: "13px"}}></i>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group">
            <label className='text-white'>Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />
           <i class="fa-solid fa-phone" style={{bottom: "13px"}}></i>
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

    
  </>
  )
}
