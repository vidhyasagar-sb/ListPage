import React from "react";

import "./layoutHeader.css";

const LayoutHeader = ({ heading, count }) => {
  return (
    <div className="layoutCardHeader">
      <h3>{heading}</h3>
      {count && (
        <div className="layoutCardCountDot">
          <div className="layoutCardCount">{count}</div>
        </div>
      )}
      <div className="layoutCardLine"></div>
    </div>
  );
};

export default LayoutHeader;
