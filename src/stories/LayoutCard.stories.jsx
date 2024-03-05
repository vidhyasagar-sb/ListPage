import React from 'react';
import LayoutCard from '../components/LayoutCard/index';

export default {
  title: 'Layout Card',
  component: LayoutCard,
  argTypes: {
    verified: {
      control: {
        type: 'select',
      },
      options: [true, false, undefined],
    },
  },
};

const Template = (args) => <LayoutCard {...args} />;

export const PolicyLayout = Template.bind({});

PolicyLayout.args = {
  heading: 'POLICIES',
  count: 3,
  slider: true,
  //   children,
};
