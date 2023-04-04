import React from "react";
import "../../styles/homepage/review.css";
import line from "../../assets/icons/line.svg";

const Review = () => {
  return (
    <>
      <div className="review">
        <h2>Patients Say</h2>
      </div>
      <div className="review__para">
        <div>
          <p>
            “I had a wonderful experience with Medkit. They ensured my health
            was greatly taken care of. I highly recommend Medkit.”<br/><br/>
            <span className="span">Aliya Roll</span>
          </p>
        </div>

        <div>
          <p>
            “My treatment was second to none and the staffs of Medkit were
            polite and caring” <br /><br/><br />
            <span className="span">Elo Zona</span>
          </p>
        </div>
      </div>
      <div className="review__image">
        <img src={line} alt="line" />
      </div>
    </>
  );
};

export default Review;
