import React from "react";

import "./button.css";

const Button = ({ type, onClick, children, btnType }) => {
  const getClassName = (bType) => {
    let className;
    switch (bType) {
      case "primary":
        className = "btnPrimary";
        break;
      case "secondary":
        className = "btnSecondary";
        break;
      default:
        className = "btnSecondary";
        break;
    }
    return className;
  };

  return (
    <button className={getClassName(btnType)} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
