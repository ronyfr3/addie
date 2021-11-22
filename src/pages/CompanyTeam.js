import React from "react";
import AboutFooterframe from "../components/AboutFooterframe";
import Arrow from "../utils/Images/Arrow 1.png";
import video from "../utils/Images/Group 13352.png";
import "./styles/CompanyTeam.css";

const ComapnyTeam = () => {
    const data=[
        {
            name:"Your name",
            podobi:"Sr. React Developer"
        },
        {
            name:"Your name",
            podobi:"Sr. React Developer"
        },
        {
            name:"Your name",
            podobi:"Sr. React Developer"
        },
        {
            name:"Your name",
            podobi:"Sr. React Developer"
        },
        {
            name:"Your name",
            podobi:"Sr. React Developer"
        },
        {
            name:"Your name",
            podobi:"Sr. React Developer"
        },
    ]
  return (
    <div className="company-wrapper">
      <div className="company-head-section">
        <h1>ADDIE Soft is nothing without</h1>
        <h1 className="h1asd">its Brilliant & Remarkable Team Members</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button>
          <p>Get in touch</p>
          <img src={Arrow} alt="" />
        </button>
      </div>
      <div className="videofootage">
        <img src={video} alt="" />
      </div>
     <div className="companyleader-wrapper">
     <div className="addisoft-leaders">
        <h1>ADDIE Soft Leaders</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      {/* leaders image */}
      <div className="leaders-image">
          {
            data.map(x=>(
                <div className="leaders-content">
                    <img src="https://www.getthatright.com/wp-content/uploads/2017/08/Hrithik-Roshan-Top-10-Most-Handsome-Boys-in-the-World.jpg" alt=""/>
                    <p>{x.name}</p>
                    <small>{x.podobi}</small>
                </div>
            ))
          }
      </div>
      
     </div>
     <div className="beloved-member-section">
     <div className="addisoft-leaders">
        <h1>Beloved Team Members</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="teammembers-image">
          {
            data.map(x=>(
                <div className="teammembers-content">
                    <img src="https://www.getthatright.com/wp-content/uploads/2017/08/Hrithik-Roshan-Top-10-Most-Handsome-Boys-in-the-World.jpg" alt=""/>
                    <p>{x.name}</p>
                    <small>{x.podobi}</small>
                </div>
            ))
          }
      </div>
      </div>
      <AboutFooterframe />
    </div>
  );
};

export default ComapnyTeam;
