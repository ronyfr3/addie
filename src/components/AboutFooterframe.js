import React from "react";
import ict from "../utils/Images/Group 13449.png";
import basis from "../utils/Images/Group 13451.png";
import aptica from "../utils/Images/image 21.png";
import cmmisvc from "../utils/Images/Group 13443.png";
import iso from "../utils/Images/Group 13442.png";
import buet from "../utils/Images/Group 13441.png";
import "./styles/AboutFooterframe.css";
const AboutFooterframe = () => {
  return (
    <div className="aboutFooterFrame-wrapper">
       <div className="aboutFooterFrame">
            {/* first */}
      <div className="footerframe-first">
      <div className="footerframe-proud-member">
        <h1>Proud Member of</h1>
        <img src={basis} alt="" />
      </div>
      <div className="footerFrame-received-awards">
        <h1>received awards</h1>
        <div className="footerFrame-received-awards-imgs">
          <img src={aptica} alt="" />
          <img src={ict} alt="" />
        </div>
      </div>
      </div>
      {/* second */}
      <div className="footerframe-second">
       <div className="footerframe-second-content">
       <h1>Recognition</h1>
        <small>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </small>
       </div>
       <div className="footerframe-second-logos">
           <img src={buet} alt="" />
           <img src={iso} alt="" />
           <img src={cmmisvc} alt="" />
       </div>
      </div>
       </div>
    </div>
  );
};

export default AboutFooterframe;
