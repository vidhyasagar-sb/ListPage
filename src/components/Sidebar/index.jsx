import React from "react";
import Collapse from "../../assets/icon/Collapse";
import Arrow, {
  AccountMenuIcon,
  ClaimsMenuIcon,
  HomeIcon,
  PolicyMenuIcon,
} from "../../assets/images/sidebar";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ collapse, setCollapse }) => {
  const { pathname } = useLocation();

  const expand = () => {
    setCollapse((prev) => !prev);
  };

  const sidebarMenu = [
    {
      route: "/",
      menu_label: "Home",
      icon: <HomeIcon />,
      iconActive: <HomeIcon />,
    },
    {
      route: "/claim-list",
      menu_label: "Claims",
      icon: <ClaimsMenuIcon />,
      iconActive: <ClaimsMenuIcon active={true} />,
    },
    {
      route: "/policy-list",
      menu_label: "Policies",
      icon: <PolicyMenuIcon />,
      iconActive: <PolicyMenuIcon active={true} />,
    },
    {
      route: "/account",
      menu_label: "Account",
      icon: <AccountMenuIcon />,
      iconActive: "",
    },
  ];

  return (
    <div className="h-[calc(100vh_-_70px)] flex flex-col justify-between fixed  z-[6] bg-[#EFF6FF] shadow-[0px_1px_3px_0px_#0F172A1A]">
      <ul
        className="flex flex-col w-[204px] transition-all duration-[0.5s] ease-[ease] grow gap-[10px] px-3 pt-[10px]"
        style={{ width: collapse ? "204px" : "60px" }}
      >
        {sidebarMenu?.map((data, i) => {
          return (
            <Link to={data?.route} key={i}>
              <li
                className={`text-[#64748B] text-sm list-none cursor-pointer rounded hover:bg-[#DBEAFE] my-0 group ${
                  collapse ? "" : "menuCollapsed"
                } ${pathname === data?.route ? "bg-[#DBEAFE]" : ""}`}
              >
                <span
                  className={`flex items-end gap-3 p-[10px] pl-3 relative ${
                    collapse ? "" : "max-w-[44px] mx-auto justify-center"
                  } ${
                    pathname === data?.route ? "text-[#3D3D3D] font-bold" : ""
                  }`}
                  onClick={() => console.log(data?.menu_label, data?.route)}
                >
                  {pathname === data?.route ? data?.iconActive : data?.icon}

                  {collapse ? (
                    <p className="basis-2/3">{data.menu_label}</p>
                  ) : (
                    ""
                  )}

                  {!collapse && (
                    <ul className="bg-[#f8fbfb] absolute right-[-180px] hidden shadow-[0px_0px_3.847px_0px_rgba(0,0,0,0.1215686275)] rounded w-[170px] ml-0 top-0 group-hover:block p-3">
                      <span>{data.menu_label}</span>
                    </ul>
                  )}
                </span>{" "}
              </li>
            </Link>
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
