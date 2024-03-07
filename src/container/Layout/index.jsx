import React, { useState } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useLocation } from "react-router-dom";

import { LayoutStyles } from "./layoutStyle.js";
import { getWindowWidth } from "../../utils/general.js";
import FooterNav from "../../components/ResponsiveNavbar/index.tsx";

const Layout = (props) => {
  const { children, header, sidebar } = props;
  const [collapse, setCollapse] = useState(true);

  return (
    <LayoutStyles>
      <div className={`parentAuthRoutes ${!collapse && "changeDashboardSize"}`}>
        {header && (
          <div className="parentAuthRoutesHeader">
            <Header setCollapse={setCollapse} collapse={collapse} />
          </div>
        )}
        <div className="authRoutes">
          {sidebar && (
            <div
              className={`authRoutes-sidebar ${
                collapse ? "sidebarExpanded" : "sidebarCollapsed"
              } ${collapse ? "sidebarExpandedPhn" : "sidebarCollapsedPhn"}`}
            >
              {!getWindowWidth() ? (
                <Sidebar collapse={collapse} setCollapse={setCollapse} />
              ) : (
                <FooterNav />
              )}
            </div>
          )}
          <div className="authRoutesChildren">{children}</div>
        </div>
      </div>
    </LayoutStyles>
  );
};

export default Layout;
