import React from "react";
import "./plainCard.css";

const PlainCard = ({ children, bgColor }) => {
  return (
    <div className="plainCard" style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

export default PlainCard;
