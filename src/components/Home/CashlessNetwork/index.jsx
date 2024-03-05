import React from "react";

import LayoutHeader from "../../LayoutHeader";
import PlainCard from "../../PlainCard";
import Button from "../../Button";

import cashlessPhone from "../../../assets/images/home/cashlessService.png";

import "./cashlessNetwork.css";
import Chip from "../../Chip";

const CashlessNetwork = () => {
  return (
    <div>
      <LayoutHeader heading="CASHLESS NETWORK" />
      <PlainCard bgColor="#DAF0D2">
        <div className="cashlessNetworkCard">
          <div className="cashlessServicesContainer">
            {/* <div className="cashlessChip">Cashless Services</div> */}
            <Chip tagName="Cashless Services" tagType="info" />
            <div className="cashlessPercent">90%</div>
            <div className="cashlessPreference">
              Users prefers over reimbursement
            </div>
          </div>
          <div className="cashlessNetworkImg">
            <img src={cashlessPhone} alt="cashless" />
          </div>
        </div>
        <Button btnType="primary">Know More</Button>
      </PlainCard>
    </div>
  );
};

export default CashlessNetwork;
