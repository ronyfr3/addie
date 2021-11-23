import React from "react";
import { Link } from "react-router-dom";
import CB from "../../../utils/Images/Group 13506.png";
import CP from "../../../utils/Images/Group 13511.png";
import OT from "../../../utils/Images/Group 13512.png";
import OP from "../../../utils/Images/Group 13513.png";
import phone from "../../../utils/Images/phone.png";
import "./ServiceContent.css";

const serviceContent = () => {
  const data = [
    {
      logo: CB,
      link: "/webdesign",
      title: "web design & development",
      arr: [
        "custom enterprise solution",
        "E-commerce",
        "CMS",
        "API & Backend",
        "UI & UX",
        "wireframe",
      ],
    },
    {
      logo: CP,
      link: "/mobileapp",
      title: "mobile app development",
      arr: ["native apps", "cross platform apps", "hybrid apps", "PWA"],
    },
    {
      logo: OT,
      title: "Network Solution",
      link: "/networksolution",
      arr: ["network architecture", "LAN/ WAN Set-up", "Oracle/ SQL"],
    },
    {
      logo: OP,
      title: "Digital Marketing",
      link: "/digitalmarket",
      arr: [
        "SEO",
        "Add Strategy",
        "Social Media Marketing",
        "Content Writing",
        "Motion Graphics",
      ],
    },
    {
      logo: OP,
      title: "project Management & Consultancy",
      link: "/projectmanagement",
      arr: [
        "offshore development",
        "Learning management & solutions",
        "PLC management",
      ],
    },
    {
      logo: OP,
      title: "ERP Solution",
      link: "/erpsolution",
      arr: ["Large Scale ERP", "Flexible ERP", "Industry Specific ERP"],
    },
    {
      logo: OP,
      title: "QA Assurance",
      link: "/qraassurance",
      arr: [
        "Requirement Analysis",
        "Test Dev & Planning",
        "Test Execution & reporting",
        "Retesting Defects",
      ],
    },
    {
      logo: OP,
      title: "E-governance",
      link: "/egovernance",
      arr: ["G2C", "G2B", "G2G"],
    },
  ];

  return (
    <div className="serviceContent-wrapper">
      {data.map((x, i) => (
        <div className="serviceContent-dataField" key={i}>
          <img src={x.logo} alt="" />
          <div className="serviceContent-title">
            <Link to={`${x.link}`}>{x.title}</Link>
            {x.arr.map((x) => (
              <small>{x}</small>
            ))}
          </div>
        </div>
      ))}
      <div className="serviceContent-footer">
        <div>
            <p>Ready to talk about your first project</p>
            <small>We are available 24/7, Get in touch or send us your requirements</small>
        </div>
        <button>
          <img src={phone} alt="" className="header-contact-phn-logo" />
          <p>Contact us</p>
        </button>
      </div>
    </div>
  );
};

export default serviceContent;
