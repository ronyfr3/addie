import React from "react";
import Arrow from "../utils/Images/Arrow 1.png";
import "./styles/CompanyPartners.css";
import watchlaptop from "../utils/Images/Rectangle 1872.png";

const CompanyPartners = () => {
  const data = [
    {
      title: "Quality of The Product",
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Innovative & Brilliant Ideas of the Features",
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Transparency of the Process and Workflow",
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "24/7 Support",
      des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];
  return (
    <div className="partner-wrapper">
      <div className="partner-head-section">
        <h1>Working & Collaborating with People</h1>
        <h1 className="h1asd">at Giving our Best Services</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button>
          <p>Become a Partner</p>
          <img src={Arrow} alt="" />
        </button>
      </div>
      <div className="partner-image-des">
        <img src={watchlaptop} alt="" />
        <div className="image-des-sec">
          <h1>What you will get</h1>
          {data.map((x) => (
            <div className="image-sec-details">
              <p>{x.title}</p>
              <small>{x.des}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="engage">
        <div className="engage-content">
          <h1>Client Engaging Rate</h1>
          <small>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </small>
          <div>
            <h1>Client Group</h1>
            <div className="client-group">
              <ul>
                <li>
                  Government
                  <div className="gov">
                    <div></div>
                    <span>62%</span>
                  </div>
                </li>
                <li>
                  Telecomunication
                  <div className="gov2">
                    <div></div>
                    <span>65%</span>
                  </div>
                </li>
                <li>
                  Education
                  <div className="gov3">
                    <div></div>
                    <span>63%</span>
                  </div>
                </li>
                <li>
                  Financial
                  <div className="gov4">
                    <div></div>
                    <span>62</span>
                  </div>
                </li>
                <li>
                  Oberseas
                  <div className="gov5">
                    <div></div>
                    <span>15%</span>
                  </div>
                </li>
                <li>
                  Corporate
                  <div className="gov6">
                    <div></div>
                    <span>38%</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* video */}
        <p>video</p>
      </div>
    </div>
  );
};

export default CompanyPartners;
