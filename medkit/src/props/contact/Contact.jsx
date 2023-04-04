import React from 'react'
import './contact.css';
import call from "../../assets/icons/call.svg"
import chat from "../../assets/icons/chat.svg"
import Live_Chat from "../../assets/icons/LIve_Chat.svg"

const Contact = (props) => {
  return (
    <>
    <section className="contact">
        <div>
            <img  className="image" src={props.img} alt={props.alt}/>
        </div>
        <div>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
        <div className="icons">
            <img src={chat} alt="social_icon" />
            <img src={call} alt="social_icon" />
            <img src={Live_Chat} alt="social_icon" />
        </div>
    </section>
    </>
  )
}

export default Contact