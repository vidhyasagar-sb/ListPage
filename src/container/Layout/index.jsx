import React, { useState } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useLocation } from "react-router-dom";

import { LayoutStyles } from "./layoutStyle.js";

const Layout = (props) => {
  const { children, header, sidebar } = props;
  const [collapse, setCollapse] = useState(true);

  const location = useLocation();

  return (
    <LayoutStyles>
      <div className={`parentAuthRoutes ${!collapse && "changeDashboardSize"}`}>
        {header && (
          <div className="parentAuthRoutesHeader">
            <Header setCollapse={setCollapse} collapse={collapse} />
          </div>
        )}
        <div
          className="authRoutes"
          //   style={{
          //     height: isInTripListing ? "100%" : "auto",
          //   }}
        >
          {sidebar && (
            <div
              className={`authRoutes-sidebar ${
                collapse ? "sidebarExpanded" : "sidebarCollapsed"
              } ${collapse ? "sidebarExpandedPhn" : "sidebarCollapsedPhn"}`}
            >
              <Sidebar collapse={collapse} setCollapse={setCollapse} />
            </div>
          )}
          <div className="authRoutesChildren">{children}</div>
        </div>
      </div>
    </LayoutStyles>
  );
};

export default Layout;
