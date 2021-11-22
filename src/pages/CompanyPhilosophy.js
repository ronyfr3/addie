import React from "react";
import AboutFooterframe from "../components/AboutFooterframe";
import Arrow from "../utils/Images/Arrow 1.png";
import "./styles/ComapnyPhilosophy.css";

const CompanyPhilosophy = () => {
  return (
    <div className="philosophy-wrapper">
      <div className="philosophy-head-section">
        <h1>If Opportunity doesn’t knock Build a Door</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button>
          <p>Our Solution</p>
          <img src={Arrow} alt="" />
        </button>
      </div>
      <AboutFooterframe />
    </div>
  );
};

export default CompanyPhilosophy;
