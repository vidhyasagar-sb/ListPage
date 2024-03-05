import React from "react";

import LayoutCard from "../../LayoutCard";
import Accordion from "../../Accordion";

import maternityBenefits from "../../../assets/images/home/maternityBenefits.svg";
import nutritional from "../../../assets/images/home/nutritional.svg";

import "./opdWellness.css";

const OpdWellness = () => {
  const textStyle = {
    color: "#64748B",
    fontSize: "12px",
    fontWeight: 400,
    marginTop: 12,
    textAlign: "center",
  };

  const wrapperStyle = {
    padding: 12,
    paddingBottom: 16,
  };

  const containerStyle = {
    display: "flex",
    gap: 12,
    padding: 16,
    overflowX: "auto",
  };

  const sampleData = [
    {
      title: "Sponsored corporate benefits",
      content: (
        <div style={containerStyle}>
          <div style={wrapperStyle}>
            <img src={maternityBenefits} alt="Maternity" />
            <p style={textStyle}>Maternity</p>
          </div>
          <div style={wrapperStyle}>
            <img src={nutritional} alt="Nutritional" />
            <p style={textStyle}>Nutritional</p>
          </div>
          <div style={wrapperStyle}>
            <img src={maternityBenefits} alt="Healthy" />
            <p style={textStyle}>Healthy</p>
          </div>
        </div>
      ),
    },
    {
      title: "OPD policy benefits",
      content: (
        <div style={containerStyle}>
          <div style={wrapperStyle}>
            <img src={maternityBenefits} alt="Maternity" />
            <p style={textStyle}>Maternity</p>
          </div>
          <div style={wrapperStyle}>
            <img src={nutritional} alt="Nutritional" />
            <p style={textStyle}>Nutritional</p>
          </div>
          <div style={wrapperStyle}>
            <img src={maternityBenefits} alt="Healthy" />
            <p style={textStyle}>Healthy</p>
          </div>
        </div>
      ),
    },
    {
      title: "Non- medical benefits",
      content: (
        <div style={containerStyle}>
          <div style={wrapperStyle}>
            <img src={maternityBenefits} alt="Maternity" />
            <p style={textStyle}>Maternity</p>
          </div>
          <div style={wrapperStyle}>
            <img src={nutritional} alt="Nutritional" />
            <p style={textStyle}>Nutritional</p>
          </div>
          <div style={wrapperStyle}>
            <img src={maternityBenefits} alt="Healthy" />
            <p style={textStyle}>Healthy</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <LayoutCard heading="OPD & WELLNESS">
      <div className="opdWellness">
        {sampleData.map((item, index) => {
          return (
            <Accordion
              key={index}
              title={<h3>{item.title}</h3>}
              content={item.content}
            />
          );
        })}
      </div>
    </LayoutCard>
  );
};

export default OpdWellness;
