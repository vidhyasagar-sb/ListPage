import React from "react";
import "../../js/ClaimListWebComp.js";
import FooterNav from "../../components/ResponsiveNavbar/index.tsx";

const ClaimList = ({ theme, locale }) => {
  return (
    <div>
      <claims-web-component
        theme={theme}
        locale={locale}
      ></claims-web-component>
      {/* <FooterNav /> */}
    </div>
  );
};

export default ClaimList;
