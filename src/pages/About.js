import React from "react";
import Arrow from "../utils/Images/Arrow 1.png";
import "./styles/About.css";
import Carousel from "../components/carousel/Carousel";
import AboutFooterframe from "../components/AboutFooterframe";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-head-section">
        <h1>Good Company is a Journey that makes the way beautiful</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button>
          <p>Our Services</p>
          <img src={Arrow} alt="" />
        </button>
      </div>
      <Carousel />
      <AboutFooterframe />
    </div>
  );
};

export default About;
