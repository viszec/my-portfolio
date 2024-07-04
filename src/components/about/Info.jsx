import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-certification about__icon"></i>

        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Master of IT</span>
      </div>
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4yrs+ Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">16 + Projects</span>
      </div>
    </div>
  );
};

export default Info;
