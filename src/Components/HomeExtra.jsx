import React from 'react'

function HomeExtra() {
  return (
    { <div className="service-area bg py-5">
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
              {services &&
                services.map((services, key) => (
                  <div className="col-md-6 col-lg-4 " data-aos="fade-up">
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay=".25s"
                    >
                      <div className="service-img">
                        <img
                          src={`https://admin.rockriders.in/${services.category_image}`}
                        />
                      </div>
                      <div className="service-content">
                        <h3 className="service-title">
                          <a href="#">{services.category_title}</a>
                        </h3>
                        <p className="service-text">
                          {services.category_description}
                        </p>
                        <div className="service-arrow">
                          <a
                            href="#"
                            className="theme-btn show-modal"
                            onClick={() => setShowModal(true)}
                          >
                            Read More
                            <i className="fas fa-arrow-right" />
                          </a>
                          <Modal
                            show={showModal}
                            onHide={handleModalClose}
                            id="myModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="myModalLabel"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="myModalLabel">
                                Login Form
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <form onSubmit={handleSubmit}>
                                <div className="row 3">
                                  <div className="col-lg-12 ">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-person"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          class="form-control"
                                          name="name"
                                          placeholder="Your Name"
                                          value={formData.name}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fas fa-phone"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="number"
                                          class="form-control"
                                          name="mobile"
                                          placeholder="Phone"
                                          value={formData.mobile}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 ">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-people-simple"></i>
                                          </span>
                                        </div>
                                        <select
                                          className="form-control"
                                          name="type"
                                          value={formData.type}
                                          onChange={handleChange}
                                        >
                                          <option value="Passenger">
                                            Passenger
                                          </option>
                                          <option value="1 Person">
                                            1 Person
                                          </option>
                                          <option value="2 Person">
                                            2 Person
                                          </option>
                                          <option value="3 Person">
                                            3 Person
                                          </option>
                                          <option value="4 Person">
                                            4 Person
                                          </option>
                                          <option value="5 Person">
                                            5 Person
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-location-dot"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Start Destination"
                                          name="pickup"
                                          value={formData.pickup}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-location-dot"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="location"
                                          class="form-control"
                                          placeholder="End Destination"
                                          name="drop"
                                          value={formData.drop}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div class="form-group">
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                            <i class="fa-solid fa-calendar-days"></i>
                                          </span>
                                        </div>
                                        <input
                                          type="date"
                                          class="form-control"
                                          placeholder="Booking Date"
                                          name="bookingDate"
                                          value={formData.bookingDate}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" ">
                                  <button
                                    className="theme-btn shadow"
                                    type="submit"
                                  >
                                    Book Taxi
                                    <i className="fas fa-arrow-right" />
                                  </button>
                                </div>
                              </form>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div> }

        { <div className="feature-area feature-bg py-5">
          <div className="container mt-150">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Feature</span>
                  <h2 className="site-title text-white">Our Awesome Feature</h2>
                  <div className="heading-divider" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <div className="feature-icon">
                    <img src="assets/img/icon/taxi-safety.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Safety Guarantee</h4>
                    <p>
                      There are many variations of majority have suffered
                      alteration in some form injected humour randomised words.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item mt-lg-5 wow fadeInDown"
                  data-wow-delay=".25s"
                >
                  <div className="feature-icon">
                    <img src="assets/img/icon/pickup.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Fast Pickup</h4>
                    <p>
                      There are many variations of majority have suffered
                      alteration in some form injected humour randomised words.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <div className="feature-icon">
                    <img src="assets/img/icon/money.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Affordable Rate</h4>
                    <p>
                      There are many variations of majority have suffered
                      alteration in some form injected humour randomised words.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-item mt-lg-5 wow fadeInDown"
                  data-wow-delay=".25s"
                >
                  <div className="feature-icon">
                    <img src="assets/img/icon/support.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>24/7 Support</h4>
                    <p>
                      There are many variations of majority have suffered
                      alteration in some form injected humour randomised words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> }

        { <div className="choose-area py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="choose-content">
                  <div
                    className="site-heading wow fadeInDown mb-4"
                    data-wow-delay=".25s"
                  >
                    <span className="site-title-tagline text-white justify-content-start">
                      <i className="flaticon-drive" /> Why Choose Us
                    </span>
                    <h2 className="site-title text-white mb-10">
                      We are dedicated <span>to provide</span> quality service
                    </h2>
                    <p className="text-white">
                      There are many variations of passages available but the
                      majority have suffered alteration in some form going to
                      use a passage by injected humour randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                  <div
                    className="choose-img wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <img src="assets/img/choose/01.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="choose-content-wrapper wow fadeInRight"
                  data-wow-delay=".25s"
                >
                  <div className="choose-item">
                    <div className="choose-item-info">
                      <h3>Best Quality Taxi</h3>
                      <p>
                        There are many variations of passages available but the
                        majority have suffered alteration in form injected
                        humour words which don't look even slightly believable.
                        If you are going passage you need there anything embar.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item ms-lg-5">
                    <div className="choose-item-info">
                      <h3>Expert Drivers</h3>
                      <p>
                        There are many variations of passages available but the
                        majority have suffered alteration in form injected
                        humour words which even slightly believable. If you are
                        going passage you need there anything.
                      </p>
                    </div>
                  </div>
                  <div className="choose-item mb-lg-0">
                    <div className="choose-item-info">
                      <h3>Many Locations</h3>
                      <p>
                        There are many variations of passages available but the
                        majority have suffered alteration in form injected
                        humour words which don't look even slightly believable.
                        If you are going passage you need there anything embar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> }

        { <div className="faq-area py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-right">
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline justify-content-start">
                      Faq's
                    </span>
                    <h2 className="site-title my-3">
                      General <span>frequently</span> asked questions
                    </h2>
                  </div>
                  <p className="about-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </p>
                  <div className="faq-img mt-3">
                    <img src="assets/img/faq/01.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion" id="accordionExample">
                  {faq &&
                    faq.map((faqData, key) => (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span>
                              <i className="far fa-question" />
                            </span>{" "}
                            {faqData.faq_question}
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {faqData.faq_answer}
                          </div>
                        </div>
                      </div>
                    ))}

                   <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span>
                          <i className="far fa-question" />
                        </span>{" "}
                        How Can I Become A Member ?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment, so blinded by desire. Ante odio
                        dignissim quam, vitae pulvinar turpis erat ac elit eu
                        orci id odio facilisis pharetra.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span>
                          <i className="far fa-question" />
                        </span>{" "}
                        What Payment Gateway You Support ?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment, so blinded by desire. Ante odio
                        dignissim quam, vitae pulvinar turpis erat ac elit eu
                        orci id odio facilisis pharetra.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span>
                          <i className="far fa-question" />
                        </span>{" "}
                        How Can I Cancel My Request ?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment, so blinded by desire. Ante odio
                        dignissim quam, vitae pulvinar turpis erat ac elit eu
                        orci id odio facilisis pharetra.
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div> }
  )
}

export default HomeExtra