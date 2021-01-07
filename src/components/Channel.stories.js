import Channel from './Channel.svelte';

export default {
    title: 'Chat/Channel',
    component: Channel,
    argTypes: {
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: Channel,
    props: {
        ...args,
    }
});

const messageData = {
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...messageData };
