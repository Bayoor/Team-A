import React from "react";
import "../styles/homepage.css";
import doc from "../assets/images/doc2.png";
import vaccine from "../assets/images/vaccine.png";
import Services from "../props/services/Services";
import Service from "../components/Service";
import bus from "../assets/icons/bus.svg";
import avatar from "../assets/icons/avatar.svg";
import clock from "../assets/icons/clock.svg";

const Hompage = () => {
  return (
    <section className="homepage__hero-section">
      <div className="homepage__display-flex">
        <div className="homepage__hero-wrapper">
          <div className="homepage__hero-image">
            <img className="img" src={doc} alt="doc" />
          </div>
        </div>

        <div className="homepage__hero-content">
          <h2>Get Access to Quick and Confidential Medical Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam
            lacus tristique diam. Nulla sed rhoncus cras neque pulvinar. Pretium
            et adipiscing sociis commodo sit sem. Ac fusce vel facilisis
            pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.
          </p>

          <div className="homepage__hero-btn">
            <button>Get Started</button>
          </div>
          <div className="homepage__hero-booking">
            <h2>Dr. Raj Spencer</h2>
            <span>Consultant</span>
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
      <div className="homepage__consult-section">
        <div className="homepage__consult-image">
          <img src={vaccine} alt="covid vaccine" />
        </div>
        <div>
          <h2>COVID-19 VACCINE ADMINISTRATION</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat
            mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices.
            Quis pellentesque amet massa sed purus adipiscing. Ornare faucibus
            sed id scelerisque odio habitant urna in nibh. Gravida nulla elit
            arcu scelerisque. Viverra lectus ullamcorper duis sed leo habitasse.
            Ac venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc
            velit pretium et vitae morbi consequat. Id mi amet dui non leo
            tellus nunc pulvinar. Tortor in justo a in egestas proin ipsum.
            Lectus ut lobortis quam egestas consequat et aliquet ipsum vel.
            Risus eu pharetra cras gravida. Nunc in eget semper maecenas ligula
            amet et. Mattis ullamcorper amet at metus. Diam pretium pulvinar
            mattis rutrum nunc risus. Ut ipsum duis egestas non. Dictum nunc
            sodales nisi senectus adipiscing feugiat. Sed arcu pellentesque urna
            dolor ultrices condimentum risus. Interdum morbi mauris in a morbi
            felis tincidunt. Aenean enim sed pellentesque arcu. Lorem posuere
            elit est in interdum tempus.
          </p>
          <button>Register Now</button>
        </div>
      </div>
      <Service h2="MEDKIT SPECIALITIES" />
      <div className="homepage__service-display_flex">
        <Services
          img={bus}
          alt="bus"
          h2="FASTEST AMBULANCE"
          p="We provide you with experienced and highly professional doctors with the aim of providing exceptional care."
        />
        <Services
        className="para"
          img={avatar}
          alt="bus"
          h2="FASTEST AMBULANCE"
          p="We provide you with experienced and highly professional doctors with the aim of providing exceptional care."
        />
        <Services
          img={clock}
          alt="bus"
          h2="FASTEST AMBULANCE"
          p="We are committed to providing healthcare services with the consideration of patients satisfaction. Our patients come first!"
        />
      </div>
    </section>
  );
};

export default Hompage;
