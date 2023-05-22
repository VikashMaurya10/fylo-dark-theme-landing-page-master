import React from "react";

const Card = ({ para, proSrc, name, about }) => {
  return (
    <div className="card">
      <p>{para}</p>
      <div className="d-f ai-c">
        <img src={proSrc} alt="img" />
        <div>
          <h4>{name}</h4>
          <span>{about}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
