import React from "react";
import "./services.css";

const Services = (props) => {
  return (
    <div className="align">
      <div className={props.className}>
        <img src={props.img} alt={props.alt} />
        <h2 className="services__heading">{props.h2}</h2>
        <p className="services__para">{props.p}</p>
      </div>
    </div>
  );
};

export default Services;
