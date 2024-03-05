import { useEffect, useState } from "react";

// import { getWindowWidth } from "utils/window";
import Logo from "../../assets/images/header/logo.svg";
import Bell from "../../assets/images/header/bell.svg";
import ProfileIcon from "../../assets/images/header/profile.svg";
import DownArrow from "../../assets/images/header/downArrow.svg";
import Hamburger from "../../assets/images/header/hamburger.svg";
import HideArrow from "../../assets/images/header/hideSidebarArrow.svg";

import ProfileCard from "../ProfileCard";

import wallet from "../../assets/images/wallet.svg";
import notificationBell from "../../assets/images/notificationBell.svg";
import arrowDown from "../../assets/images/arrowDown.svg";

import { HeaderStyle } from "./header.js";

const Header = ({ setCollapse, collapse }) => {
  const [authData, setAuthData] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [detailsMenu, setDetailsMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  const openDetailsMenu = () => {
    setDetailsMenu(true);
  };

  const handleClick = (event) => {
    if (!event.target.closest("#headerPopup")) {
      setDetailsMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <HeaderStyle>
      <div className="headerContainer">
        <header className="header">
          <div className="headerLogo">
            <a to={"/dashboard"}>
              <img
                className={`companyLogo ${collapse ? "logoPhn" : ""}`}
                src={Logo}
                alt="logo"
              />
            </a>
            <img
              onClick={() => setCollapse((prev) => !prev)}
              className="hamburger"
              src={collapse ? HideArrow : Hamburger}
              alt="Hamburger"
              id="hamburger"
            />
          </div>

          <div className="headerProfile">
            <div className="headerActionContainer">
              <button onClick={() => console.log("express")}>Express</button>
              <img src={wallet} alt="Wallet" />
              <img src={notificationBell} alt="Notification" />
            </div>
            <div className="headerNameContainer">
              <ProfileCard name="Sarath kumar" />
              <div className="text-[#3A4243] text-sm">{"Sarath kumar"}</div>
              <img src={arrowDown} alt="view more" />
            </div>
          </div>
        </header>
      </div>
    </HeaderStyle>
  );
};

export default Header;
