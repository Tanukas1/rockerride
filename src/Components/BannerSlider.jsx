import React,{useState, useEffect} from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
            <>
              <div
                className="hero-single"
                style={{
                  background: `url(https://admin.rockriders.in/${slideData.slider_image})`,
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
                          Welcome To Taxica!
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Book <span>Taxi</span> For Your Ride
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          {slideData.alt_text}
                        </p>
                        <div
                          className="hero-btn justify-content-center"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <a href="#" className="theme-btn">
                            About More
                            <i className="fas fa-arrow-right" />
                          </a>
                          <a
                            href="#"
                            className="theme-btn theme-btn2 text-dark"
                          >
                            Learn More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </OwlCarousel>
    </div>
  );
};

export default BannerSlider;
