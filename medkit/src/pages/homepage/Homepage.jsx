import React from "react";
import "../../styles/homepage/homepage.css";
import doc from "../../assets/images/doc2.png";
// import rectangle from "../../assets/images/rectangle.png";

const Homepage = () => {
  return (
    <section className="homepage section__padding">
      <div className="homepage__hero-section">
        <div className="homepage__hero-image">
          <img src={doc} alt=" A male doctor" />
        </div>

        <div className="homepage__hero-content">
          <h2>
            Get Access to Quick
            <br /> and Confidential Medical Services
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam
            lacus tristique diam. Nulla sed rhoncus cras neque pulvinar. Pretium
            et adipiscing sociis commodo sit sem. Ac fusce vel facilisis
            pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.
          </p>
          <button>Get Started</button>
          <div className="appointment">
            <h2>Dr. Raj Spencer</h2>
            <span>Consultant</span>
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
