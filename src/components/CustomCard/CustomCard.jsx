import React from "react";
import "./customCard.css";

const CustomCard = ({ title, children }) => {
  return (
    <div className="customCard">
      <h1 className="cardTitle">{title}</h1>
      <div className="cardBody">{children}</div>
    </div>
  );
};

export default CustomCard;
