import React from 'react';
import '../styles/About.css'
import CompanyLogo from "../Assets/CompanyLogo.png";

const About = () => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about-img">
              <img src={CompanyLogo} alt="company-logo" />
            </div>
          </div>
          <div className="col-lg-6 col-lg-offset-1">
            <div className="about-text">
              <h2>About Us</h2>
              <p>We are committed to pushing culinary boundaries and expanding our influence in the market. With a focus on user-centric experiences and foresight into the future, our growth-oriented vision is a testament to our strategic goals and ambitions.</p>
              <a href="https://www.aichefmaster.com/">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;