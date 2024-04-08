import React,{useState, useEffect} from "react";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Teximonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    // console.log(testimonial);
    useEffect(() => {
      axios.get("https://admin.rockriders.in/api/testimonial").then((res) => {
        return setTestimonial(res.data.data.data);
      });
    }, []);

    const options = {
        items: 3, // Number of items to show
        loop: true, // Infinite loop
        autoplay: true, // Autoplay
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        responsive: {
            0: {
                items: 1 // Number of items to show on small screens
            },
            768: {
                items: 2 // Number of items to show on medium screens
            },
            1024: {
                items: 3 // Number of items to show on large screens
            }
        }
    };

  return (
    <div className="testimonial-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive" /> Testimonials
              </span>
              <h2 className="site-title text-white">
                What Our Client <span>Say's</span>
              </h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
        <OwlCarousel className="owl-theme"{...options}>
          {testimonial &&
            testimonial.map((textimonialData, key) => (
              <div className="testimonial-single">
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <img
                      src={`https://admin.rockriders.in/${textimonialData.image}`}
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>{textimonialData.name}</h4>
                    <p>Customer</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <span className="testimonial-quote-icon">
                    <i className="far fa-quote-right" />
                  </span>
                  <p>{textimonialData.content}</p>
                </div>
                <div className="testimonial-rate">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Teximonial;
