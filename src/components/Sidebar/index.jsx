import React from "react";
import Collapse from "../../assets/icon/Collapse";
import {
  AccountMenuIcon,
  ClaimsMenuIcon,
  HomeIcon,
  PolicyMenuIcon,
} from "../../assets/images/sidebar";

const Sidebar = ({ collapse, setCollapse }) => {
  const expand = () => {
    setCollapse((prev) => !prev);
  };

  const sidebarMenu = [
    {
      route: "/home",
      menu_label: "Home",
      icon: <HomeIcon />,
      iconActive: "",
    },
    {
      route: "/claims",
      menu_label: "Claims",
      icon: <ClaimsMenuIcon />,
      iconActive: "",
    },
    {
      route: "/policy",
      menu_label: "Policies",
      icon: <PolicyMenuIcon />,
      iconActive: "",
    },
    {
      route: "/account",
      menu_label: "Account",
      icon: <AccountMenuIcon />,
      iconActive: "",
    },
  ];

  return (
    <div className="h-[calc(100vh_-_70px)] flex flex-col justify-between fixed  z-[9] bg-[#EFF6FF] shadow-[0px_1px_3px_0px_#0F172A1A]">
      <ul
        className="flex flex-col w-[204px] transition-all duration-[0.5s] ease-[ease] relative grow gap-[10px] pt-2"
        style={{ width: collapse ? "204px" : "60px" }}
      >
        {sidebarMenu?.map((data, i) => {
          return (
            <a href={data?.route} key={i}>
              <li
                className={`text-[#64748B] text-sm list-none cursor-pointer mx-2 my-0 ${
                  collapse ? "" : "menuCollapsed"
                }`}
              >
                <span
                  className={`flex items-end gap-3 p-[10px] ${
                    collapse ? "" : "collapsed"
                  } ${"claims" === data?.menu_label ? "selectedMenu" : ""}`}
                  onClick={() => console.log(data?.menu_label, data?.route)}
                >
                  {"claims" === data?.menu_label
                    ? data?.iconActive
                    : data?.icon}
                  {collapse ? (
                    <p className="basis-2/3">{data.menu_label}</p>
                  ) : (
                    ""
                  )}
                </span>{" "}
              </li>
            </a>
          );
        })}
      </ul>

      {/* Showing collapse button at the bottom of the screen */}
      <span
        onClick={expand}
        className={`cursor-pointer flex items-center gap-2 text-[#5c5f60] text-[1.4rem] font-semibold p-3 ${
          collapse ? "" : "justify-center"
        }`}
      >
        <span
          style={{ transform: collapse ? "rotate(0deg)" : "rotate(180deg)" }}
        >
          <Collapse />
        </span>{" "}
        <p
          style={{ width: collapse ? "100px" : "0px" }}
          className="text-sm text-[#475569] font-normal"
        >
          {collapse ? "Collapse" : ""}
        </p>
      </span>
    </div>
  );
};

export default Sidebar;
