import React from 'react'

export default function MobileAbout() {
  return (

    <div className="about-area py-4" style={{backgroundColor: "white"}}>
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
        <div className="about-right wow fadeInRight" data-wow-delay=".25s">
          <div className="site-heading mb-3">
            <span className="site-title-tagline justify-content-start">
              <i className="flaticon-drive" /> About Us
            </span>
            <h2 className="site-title">
              We Provide Trusted <span>Cab Service</span> In The World
            </h2>
          </div>
          <p className="about-text">
              We have a wide range of A/C luxury cabs for personal and corporate use for travel in Lucknow and interstate journey. 
              If you don’t want to wait for a cab, you can call Usha Cab Service for Comfort. Our Cabs in Lucknow are always available at your service. 
              You may also choose us for Lucknow Tour, we have devised special packages for your needs.
          </p>
          <p className="about-text">
              Transportation is one such facility which provides access to other amenities. In Lucknow, you could spot a no of reliable transportation facilities, 
              ranging from e rickshaw to metro.These all have their cost-effectiveness as well as time schedule issues along the range of movement.
              Commercial taxi provides a great means of transportation in the city.
          </p>
          <p className="about-text">
              Taxi in Lucknow can be easily availed by just calling at our customer care. Which can help in saving lots of time and provide a comfortable travel option 
              from the doorstep to the far-flung location in and outside Lucknow.
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
