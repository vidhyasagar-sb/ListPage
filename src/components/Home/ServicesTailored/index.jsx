import React from "react";
import LayoutHeader from "../../LayoutHeader";

import ecardService from "../../../assets/images/home/ecardService.svg";
import ecashlessService from "../../../assets/images/home/ecashlessService.svg";
import cashessService from "../../../assets/images/home/cashessService.svg";
import reimbursementService from "../../../assets/images/home/reimbursementService.svg";

import "./servicesTailored.css";

const ServicesTailored = () => {
  return (
    <div className="servicesTailored">
      <LayoutHeader heading="SERVICES TAILORED FOR YOU" />
      <div className="servicesTailoredContainer">
        <div className="servicesTailoredCard">
          <img src={ecardService} alt="E-Card" />
          <p>E-Card</p>
        </div>

        <div className="servicesTailoredCard">
          <img src={ecashlessService} alt="E-Cashless" />
          <p>E-Cashless</p>
        </div>
        <div className="servicesTailoredCard">
          <img src={cashessService} alt="Cashless" />
          <p>Reimbursement</p>
        </div>
        <div className="servicesTailoredCard">
          <img src={reimbursementService} alt="Reimbursement" />
          <p>Cashless</p>
        </div>
      </div>

      <div className="servicesTailoredNote">
        Use Medi Assist e-card while getting admitted to hospital to avail all
        policy benefits
      </div>
    </div>
  );
};

export default ServicesTailored;
