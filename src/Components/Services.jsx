import React from 'react'
import Header from './Header';
import Footer from './Footer';
import MobileHeader from './Mobile/MobileHeader'; 
import MobileServices from './Mobile/MobileServices' 
import MobileFooter from './Mobile/MobileFooter';
import {isMobile} from 'react-device-detect';

export default function Services() {
  return (
    <>
     {isMobile ? <MobileHeader/> : <Header/>}

      {isMobile ? <MobileServices/> :
      
      <div className="service-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Services</span>
              <h2 className="site-title">Our Best Services For You</h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="service-item wow fadeInUp" data-wow-delay=".25s">
              <div className="service-img">
                <img src="assets/img/service/01.jpg" alt="" />
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Online Booking</a>
                </h3>
                <p className="service-text">
                  There are many variations of passages orem psum available but the
                  majority have suffered alteration in some form by injected.
                </p>
                <div className="service-arrow">
                  <a href="#" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-item wow fadeInUp" data-wow-delay=".50s">
              <div className="service-img">
                <img src="assets/img/service/02.jpg" alt="" />
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">City Transport</a>
                </h3>
                <p className="service-text">
                  There are many variations of passages orem psum available but the
                  majority have suffered alteration in some form by injected.
                </p>
                <div className="service-arrow">
                  <a href="#" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-item wow fadeInUp" data-wow-delay=".75s">
              <div className="service-img">
                <img src="assets/img/service/03.jpg" alt="" />
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Airport Transport</a>
                </h3>
                <p className="service-text">
                  There are many variations of passages orem psum available but the
                  majority have suffered alteration in some form by injected.
                </p>
                <div className="service-arrow">
                  <a href="#" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-item wow fadeInUp" data-wow-delay=".25s">
              <div className="service-img">
                <img src="assets/img/service/04.jpg" alt="" />
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Business Transport</a>
                </h3>
                <p className="service-text">
                  There are many variations of passages orem psum available but the
                  majority have suffered alteration in some form by injected.
                </p>
                <div className="service-arrow">
                  <a href="#" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-item wow fadeInUp" data-wow-delay=".50s">
              <div className="service-img">
                <img src="assets/img/service/05.jpg" alt="" />
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Regular Transport</a>
                </h3>
                <p className="service-text">
                  There are many variations of passages orem psum available but the
                  majority have suffered alteration in some form by injected.
                </p>
                <div className="service-arrow">
                  <a href="#" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-item wow fadeInUp" data-wow-delay=".75s">
              <div className="service-img">
                <img src="assets/img/service/06.jpg" alt="" />
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Tour Transport</a>
                </h3>
                <p className="service-text">
                  There are many variations of passages orem psum available but the
                  majority have suffered alteration in some form by injected.
                </p>
                <div className="service-arrow">
                  <a href="#" className="theme-btn">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

      }
     {isMobile ? <MobileFooter/> : <Footer/>}
    </>
   
  )
}
