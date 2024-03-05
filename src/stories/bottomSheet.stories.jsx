import React from "react";

import BottomModal from "../components/BottomModal/index";

export default {
  title: "Components/BottomModal",
  component: BottomModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A customizable bottom modal component.",
      },
    },
  },
};

const Template = (args) => (
  <BottomModal {...args}>
    <div>
      <h2>Your bottom modal Content</h2>
      <p>This is an example content for the bottom modal component.</p>
    </div>
  </BottomModal>
);

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  toggleBottomModal: () => {},
};

Default.parameters = {
  docs: {
    description: {
      story: "This is the sample for the BottomModal component.",
    },
  },
};
