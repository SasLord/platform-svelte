import Message from './Message.svelte';

export default {
    title: 'Chat/Message',
    component: Message,
    argTypes: {
        avatar: { control: 'text' },
        name: { control: 'text' },
        tag: { control: 'text' },
        text: { control: 'text' },
        date: { control: 'date' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: Message,
    props: {
        message: {
            ...args,
        }
    }
});

const messageData = {
    avatar: ``,
    name: 'User Name',
    tag: '',
    text: 'Message',
    date: new Date,
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...messageData };

export const Biege = Template.bind({});
Biege.args = { ...messageData, theme: 'Biege' };

export const Black = Template.bind({});
Black.args = { ...messageData, theme: 'Black' };
