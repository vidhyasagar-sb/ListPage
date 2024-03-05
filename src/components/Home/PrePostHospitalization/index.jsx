import React from "react";
import LayoutHeader from "../../LayoutHeader";
import PlainCard from "../../PlainCard";

import clock from "../../../assets/images/clock.svg";

import "./prePostHospitalization.css";
import Button from "../../Button";

const PrePostHospitalization = () => {
  return (
    <div className="prePostHospitalization">
      <LayoutHeader heading="PRE / POST HOSPITALIZATION" />
      <PlainCard>
        <div className="hospitalizationExpense">
          Do you have pre/post-hospitalization expenses?
        </div>

        <div className="hospitalizationDate">
          <div className="hospitalizationDateContainer">
            <div>
              <h5>Pre - hospitalization</h5>
              <h5>:</h5>
            </div>
            <div className="hospitalizationDateValue">01 Jan 2024 to DOA</div>
          </div>
          <div className="hospitalizationDateContainer">
            <div>
              <h5>Post - hospitalization</h5>
              <h5>:</h5>
            </div>
            <div>DOD to 31 Jan 2024</div>
          </div>
        </div>

        <div className="applicationDate">
          <img src={clock} alt="applicaton last date" />
          <div className="applicationDateTitle">
            <p>Application last date</p>
            <p className="applicationDateValue">:</p>
          </div>
          <p className="applicationDateValue">30 Jan 2024</p>
        </div>

        <Button btnType="primary">Apply Now</Button>
      </PlainCard>
    </div>
  );
};

export default PrePostHospitalization;
