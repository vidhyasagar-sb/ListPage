import React from 'react';
import ProfileCard from '../components/ProfileCard/index';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
  tags:['autodocs'],
  argTypes: {
    verified: {
      control: {
        type: 'select',
      },
      options: [true, false, undefined],
    },
  },
};

const Template = (args) => <ProfileCard {...args} />;

export const HomeCard = Template.bind({});

HomeCard.args = {
  name: 'Ravi kumar',
  verified: true,
};
