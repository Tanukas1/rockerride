import React, { useEffect, useState,  } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
function Gallery() {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
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

  const[gallery, setGallery] = useState([]);
  useEffect(() =>  {
    axios.get("https://admin.rockriders.in/api/gallery").then((res) => {
      return setGallery(res.data.data);
    });
  },[]);

  return (
    <div className=" py-3">
      <div className="site-heading text-center">
            
            <h2 className="site-title">Our Best Gallery For You</h2>
            <div className="heading-divider" />
      </div>
      <section className="photo-gallery">
            <div className="container">
            <OwlCarousel className="owl-theme" {...options}>
              {gallery && gallery.map((gallery, key) => (
                  <div className="item">
                  <a className="gallery-item" href={`https://admin.rockriders.in/${gallery.image}`}>
                    <img src={`https://admin.rockriders.in/${gallery.image}`} className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                  </a>
                </div>
              ))}
              {/* <div className="item">
                <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                  <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                </a>
              </div>
              <div className="item">
                <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                  <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                </a>
              </div>
              <div className="item">
                <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                  <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                </a>
              </div>
              <div className="item">
                <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                  <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                </a>
              </div>
              <div className="item">
                <a className="gallery-item" href="http://localhost:3000/assets/img/rate/01.png">
                  <img src="http://localhost:3000/assets/img/rate/01.png" className="img-fluid" alt="Lorem ipsum dolor sit amet" />
                </a>
              </div> */}
              {/* More gallery items */}
            </OwlCarousel>
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
  )
}

export default Gallery