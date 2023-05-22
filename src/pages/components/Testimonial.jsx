import React from "react";

const Testimonial = ({ title, imgSrc, para }) => {
  return (
    <div className="testmonial">
      <img src={imgSrc} alt="access image" />
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Testimonial;
