import React from "react";
import addiesoft from "../../utils/Images/Addiesoft.png";
import FooterHoc from "./FooterHoc";
import instagram from "../../utils/Images/instagram.png";
import linkedin from "../../utils/Images/LinkedIn.png";
import twitter from "../../utils/Images/twitter.png";
import youtube from "../../utils/Images/youtube.png";

const Footer = () => {
  const logos = [instagram, linkedin, twitter, youtube];
  const about = [
    "our works",
    "our team",
    "career",
    "contact us",
    "privacy policy",
    "terms & conditions",
  ];
  const services = [
    "wireframe",
    "UI & UX Design",
    "web development",
    "mobile development",
    "digital marketing",
    "case studies",
    "software development",
    "CRM software",
  ];
  const solutions = [
    "inventory",
    "content management",
    "mobile application",
    "E-commerce",
    "B2B companies",
    "CRM software",
    "learning management",
  ];
  return (
    <div className="">
      <div className="">
          {/* left */}
      <div className="">
        <img src={addiesoft} alt="" className="" />
        <div className="">
          <p className="">Advanced design development</p>
          <p className="">innovation environment</p>
        </div>
        {/* call us */}
        <div className="">
          <div className="">
            <p>Call us</p>
            <small>+1234 01234 01234</small>
            <small>+123456789</small>
          </div>
          {/* email */}
          <div className="">
            <p>Email</p>
            <small className="">contact@addiesoft.com</small>
            <small className="">support@addiesoft.com</small>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="">
        <FooterHoc name={about} header="About" />
        <FooterHoc name={services} header="Services" />
        <FooterHoc name={solutions} header="Solutions" />
      </div>
      </div>
      {/* bootom */}
      <div className=''>
        <h1>© 2021 ADDIE Soft Ltd | All Rights Reserved.</h1>
        <div  className="">
          {logos.map((x) => (
            <ul>
              <li>
                <img src={x} alt="" />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
