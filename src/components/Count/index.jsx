import React from "react";
import PropTypes from "prop-types";

import "./count.css";

const Count = ({ value, textColor = "#334155", bgColor = "#f1f5f9" }) => {
  return (
    <div className="countCircleContainer" style={{ backgroundColor: bgColor }}>
      <div className="countCircle" style={{ color: textColor }}>
        {value}
      </div>
    </div>
  );
};

Count.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Count;
