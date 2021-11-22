import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import chevRight from "../../utils/Images/chevron_right.png";
import chevLeft from "../../utils/Images/chevron_left.png";
import banner from "../../utils/Images/aboutbanner.png";

const Carousel = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div className="carousel-wrapper">
      <div className="carousel-btns">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="about-prevbtn"
        >
          <img src={chevLeft} alt="" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="about-nextvbtn"
        >
          <img src={chevRight} alt="" />
        </button>
      </div>
      <Slider
        className="aboutslick-slider"
        dots
        dotsClass="slick-dots line-indicator"
        ref={sliderRef}
        slidesToShow={1}
        slidesToScroll={1}
        customPaging={(i) => (
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "-10px",
              opacity: 0,
            }}
          >
            {i}
          </div>
        )}
      >
        {Array(3)
          .fill("")
          .map(() => (
            <div className="about-slider-images">
              <img src={banner} alt="" className="about-page-slider" />
              <div className="about-slider-content">
                <h1>About ADDIE Soft</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
