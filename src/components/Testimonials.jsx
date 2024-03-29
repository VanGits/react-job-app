import React, { useEffect } from "react";
import "../styles/Testimonials.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    initialSlide: 0,

    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          speed: 1000,
          infinite: false,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="Testimonials">
      <div className="testimonials-content" data-aos="fade-up">
        <h1>Testimonials</h1>

        <Slider {...settings} className="testimonial-slider">
          <div className="testimonial">
            <h1>1</h1>
          </div>
          <div className="testimonial">
            <h1>2 </h1>
          </div>
          <div className="testimonial">
            <h1>3 </h1>
          </div>
          <div className="testimonial">
            <h1>4 </h1>
          </div>
          <div className="testimonial">
            <h1>5 </h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
