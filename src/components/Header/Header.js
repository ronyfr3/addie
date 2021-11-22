import React, { useState } from "react";
import { Link } from "react-router-dom";
import Addiesoft from "../../utils/Images/Addiesoft.png";
import daynight from "../../utils/Images/daynight.png";
import phone from "../../utils/Images/phone.png";
import AboutContent from "./DropdownContent/AboutContent";
import ServiceContent from "./DropdownContent/ServiceContent";
import SolutionContent from "./DropdownContent/SolutionContent";
import OurWorksContent from "./DropdownContent/OurWorksContent";
import "./Header.css";

const Header = () => {
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [solution, setSolution] = useState(false);
  const [ourWorks, setOurWorks] = useState(false);
  return (
    <div className="header-wrapper">
      <Link to="/">
        {" "}
        <img src={Addiesoft} alt="" className="addielogo" />
      </Link>
      <div className="header-pages">
        <ul>
          <li onClick={() => setAbout(!about)}>about</li>
          {about && <AboutContent setAbout={setAbout}/>}

          <li onClick={() => setService(!service)}>services</li>
          {service && <ServiceContent setService={setService}/>}

          <li onClick={() => setSolution(!solution)}>solutions</li>
          {solution && <SolutionContent setSolution={setSolution}/>}

          <li onClick={() => setOurWorks(!ourWorks)}>our works</li>
          {ourWorks && <OurWorksContent setOurWorks={setOurWorks}/>}
          <li>career</li>
        </ul>
      </div>
      <div className="header-contact-btn">
        <button>
          <img src={phone} alt="" className="header-contact-phn-logo" />
          <p>Contact us</p>
        </button>
        <img src={daynight} alt="" className="header-day-night" />
      </div>
    </div>
  );
};

export default Header;
