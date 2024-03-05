import Note from '../components/Note/index';

export default {
  title: 'Note info',
  component: Note,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary'],
    },
  },
};

const Template = (args) => <Note {...args} />;

export const MembersNote = Template.bind({});
export const ClaimsNote = Template.bind({});

MembersNote.args = {
  text: 'Want to update member details?',
  type: 'secondary',
};

ClaimsNote.args = {
  text: 'Want to link another policy?',
  type: 'primary',
};
