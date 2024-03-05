import React from "react";
import Chip from "../components/Chip/index";

export default {
  title: "Chips",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    tagType: {
      control: {
        type: "select",
      },
      options: ["info", "success", "pending", "warning", "error"],
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const FeaturedChip = Template.bind({});

FeaturedChip.args = {
  tagType: "info",
  tagName: "Featured",
};
