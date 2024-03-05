import React from "react";
import Accordion from "../components/Accordion/index";

import maternityBenefits from "../assets/images/home/maternityBenefits.svg";
import nutritional from "../assets/images/home/nutritional.svg";

import "../components/Accordion//accordion.css";

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

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

const Template = (args) => <Accordion {...args} />;

export const HomeAccordion = Template.bind({});

HomeAccordion.args = {
  title: <h3>How long does it take to process a claim?</h3>,
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
  tagName: "Featured",
};
