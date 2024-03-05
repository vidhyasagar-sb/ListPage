import React from "react";
import Count from "../components/Count/index";

export default {
  title: "Count",
  component: Count,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "The numeric value to be displayed by the Count component.",
    },
    textColor: {
      description: "Text color",
    },
    bgColor: {
      description: "Background color",
    },
  },
};

const Template = (args) => <Count {...args} />;

export const LayoutCount = Template.bind({});

LayoutCount.args = {
  value: "30",
  textColor: "#334155",
  bgColor: "#f1f5f9",
};
