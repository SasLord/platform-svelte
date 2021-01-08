import Spaces from './Spaces.svelte';

export default {
    title: 'Chat/Spaces',
    component: Spaces,
    argTypes: {
        active: { control: 'text' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
        onSelect: { action: 'onSelect' },
    },
};

const Template = ({ onSelect, ...args }) => ({
    Component: Spaces,
    props: args,
    on: {
      select: onSelect,
    },
  });
  
const messageData = {
    active: 'public',
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = messageData;