import React, { useState, useEffect } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { isMobile } from "react-device-detect";
const BannerSlider = () => {
  const [slider, setSlider] = useState([]);
  // console.log(slider);
  useEffect(() => {
    axios.get("https://admin.rockriders.in/api/slider").then((res) => {
      return setSlider(res.data.data);
    });
  }, []);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div className="hero-section">
      <OwlCarousel className="hero-slider owl-carousel owl-theme" {...options}>
      {slider &&
  slider.map((slideData, key) => (
    <div key={key}>
      {isMobile ? (
        <div
          className="hero-single"
          style={{
            background: `url(https://admin.rockriders.in/${slideData.mobile_img}) no-repeat center center`,
            backgroundSize: 'cover'
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-9 mx-auto">
                <div className="hero-content text-center">
                  <h6
                    className="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    Welcome To Rockriders!
                  </h6>
                  <h1
                    className="hero-title"
                    data-animation="fadeInRight"
                    data-delay=".50s"
                  >
                    Book <span>Taxi</span> For Your Ride
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="hero-single"
          style={{
            background: `url(https://admin.rockriders.in/${slideData.slider_image}) no-repeat center center`,
            backgroundSize: 'cover'
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-9 mx-auto">
                <div className="hero-content text-center">
                  <h6
                    className="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    Welcome To Rockriders!
                  </h6>
                  <h1
                    className="hero-title"
                    data-animation="fadeInRight"
                    data-delay=".50s"
                  >
                    Book <span>Taxi</span> For Your Ride
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ))}

      </OwlCarousel>
    </div>
  );
};

export default BannerSlider;
