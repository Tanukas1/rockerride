import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";
import MobileHeader from "./Mobile/MobileHeader";
import { isMobile } from "react-device-detect";

export default function About() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    Axios.get("https://admin.rockriders.in/api/about").then((res) => {
      return setAbout(res.data.data);
    });
  }, []);
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      <div className="about-area py-120">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                <div className="about-img">
                  <img src={`https://admin.rockriders.in/${about.img1}`} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-right wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="site-heading mb-3">
                  <span className="site-title-tagline justify-content-start">
                    <i className="flaticon-drive" />
                    {about.heading}
                  </span>
                  <h2 className="site-title">{about.title}</h2>
                </div>
                <p className="about-text">{about.paragraph1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
