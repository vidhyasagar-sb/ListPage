import React from "react";

import ProfileCard from "../ProfileCard";

import wallet from "../../assets/images/wallet.svg";
import notificationBell from "../../assets/images/notificationBell.svg";
import arrowDown from "../../assets/images/arrowDown.svg";

import "./header.css";

const HomeHeader = ({ handleExpressClick, name = "Aditya Dev" }) => {
  return (
    <div className="homeHeader">
      <div className="headerNameContainer">
        <ProfileCard name={name} verified={true} />
        <div className="headerName">{name}</div>
        <img src={arrowDown} alt="view more" />
      </div>
      <div className="headerActionContainer">
        <button onClick={handleExpressClick}>Express</button>
        <img src={wallet} alt="Wallet" />
        <img src={notificationBell} alt="Notification" />
      </div>
    </div>
  );
};

export default HomeHeader;
