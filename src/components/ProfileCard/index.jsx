import React from "react";

import verifiedImg from "../../assets/images/verified.svg";
import notVerifiedImg from "../../assets/images/notVerified.svg";

import "./profileCard.css";

const ProfileCard = ({ name, verified, showName = false }) => {
  const getFirstAndSecondLetters = (input) => {
    if (typeof input !== "string") {
      return null;
    }

    const words = input.split(" ");

    if (words.length > 1) {
      const initials = words[0].charAt(0) + words[1].charAt(0);
      return initials.toUpperCase();
    } else {
      const initials = words[0].slice(0, 2);
      return initials.toUpperCase();
    }
  };

  return (
    <div className="memberContainer">
      <div className="memberLetters">
        <div>{getFirstAndSecondLetters(name)}</div>

        {verified === true && (
          <div className="memberShield memberVerified">
            <div className="shieldImgWrapper">
              <img src={verifiedImg} alt="verified" />
            </div>
          </div>
        )}

        {verified === false && (
          <div className="memberShield memberNotVerified">
            <div className="shieldImgWrapper">
              <img src={notVerifiedImg} alt="verified" />
            </div>
          </div>
        )}
      </div>

      {showName && <p className="memberName">{name}</p>}
    </div>
  );
};

export default ProfileCard;
