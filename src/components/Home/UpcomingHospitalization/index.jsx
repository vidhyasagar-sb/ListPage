import React from "react";
import LayoutHeader from "../../LayoutHeader";
import PlainCard from "../../PlainCard";
import Button from "../../Button";

import "./upcomingHospitalization.css";

const UpcomingHospitalization = () => {
  return (
    <div>
      <LayoutHeader heading="UPCOMING HOSPITALIZATION" />
      <PlainCard bgColor="#DBEAFE">
        <h4>You are eligible for Express checkout</h4>
        <p>
          You can now walk out of the hospital right after the doctor advises
          discharge, saving up to 6-8 hours.
        </p>
        <Button btnType="secondary">Become a Xpress member</Button>
      </PlainCard>
    </div>
  );
};

export default UpcomingHospitalization;
