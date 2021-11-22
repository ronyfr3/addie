import React from "react";
import { Link } from 'react-router-dom';
import CB from "../../../utils/Images/Group 13506.png";
import CP from "../../../utils/Images/Group 13511.png";
import OT from "../../../utils/Images/Group 13512.png";
import OP from "../../../utils/Images/Group 13513.png";
import './AboutContent.css';

const AboutContent = (props) => {
//outside click false
  const data = [
    {
      logo: CB,
      link:"/about",
      title: "Company Background",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      logo: CP,
      link:"/CompanyPhilosophy",
      title: "Company Philosophy",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      logo: OT,
      title: "Our Team",
      link:"/CompanyTeam",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      logo: OP,
      title: "Our Partners",
      link:"/CompanyPartners",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="aboutContent-wrapper">
      {data.map((x,i) => (
        <div className="aboutContent-dataField" key={i}>
          <img src={x.logo} alt="" />
          <div className="aboutContent-title">
            <Link to={`${x.link}`}>{x.title}</Link>
            <small>{x.des}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutContent;
