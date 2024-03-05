import React from "react";
import LayoutCard from "../../LayoutCard";
import PlainCard from "../../PlainCard";
import Button from "../../Button";

import planAdmission from "../../../assets/images/home/categories.svg";
import healthCheckup from "../../../assets/images/home/corporateBenefits.svg";
import hospitalNetwork from "../../../assets/images/home/ipdBenefits.svg";
import homeCare from "../../../assets/images/home/opdBenefits.svg";

import "./cashlessServices.css";

const CashlessServices = () => {
  return (
    <LayoutCard heading="CASHLESS SERVICES">
      <div className="cashlessService">
        <div className="services">
          <PlainCard>
            <h3>Cashless IPD services</h3>
            <div className="cashlessCardWrapper">
              <div className="cashlessImgContainer">
                <img src={hospitalNetwork} alt="Hospital network" />
                <p>Network Hospitals</p>
              </div>
              <div className="cashlessImgContainer">
                <img src={planAdmission} alt="Plan hospitalization" />
                <p>Plan Hospitalization</p>
              </div>
            </div>
          </PlainCard>
        </div>

        <div className="services">
          <PlainCard>
            <h3>Cashless OPD services</h3>
            <div className="cashlessCardWrapper">
              <div className="cashlessImgContainer">
                <img src={healthCheckup} alt="Health checkup" />
                <p>Health check-up</p>
              </div>
              <div className="cashlessImgContainer">
                <img src={homeCare} alt="Home Care" />
                <p>Home care</p>
              </div>
            </div>
          </PlainCard>
        </div>

        <PlainCard bgColor="#F0FAF0">
          <div className="planHospital">
            <h3>Planning to get hospitalized?</h3>
            <p>
              Avoid wait time at the hospital’s insurance desk on the day of
              admission to obtain pre-authorization.
            </p>
            <Button btnType="primary">Apply Now</Button>
          </div>
        </PlainCard>
      </div>
    </LayoutCard>
  );
};

export default CashlessServices;
