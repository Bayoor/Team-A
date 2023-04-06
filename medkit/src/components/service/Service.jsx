import React from 'react'
import line from "../../assets/icons/line.svg"
import "../../styles/homepage/service.css"

const Service = (props) => {
  return (
    <div className="service align">
    <h2>{props.h2}</h2>
    <img src={line} alt="line" />
</div>
  )
}

export default Service