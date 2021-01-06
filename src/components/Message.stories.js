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
        type: {
            control: { type: 'select', options: ['msg', 'date', 'text'] },
        },
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
    type: 'msg',
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...messageData };

export const Tagged = Template.bind({});
Tagged.args = { ...messageData, tag: '#Common' };

export const Biege = Template.bind({});
Biege.args = { ...messageData, theme: 'Biege' };

export const Black = Template.bind({});
Black.args = { ...messageData, theme: 'Black' };

export const dateDiv = Template.bind({});
dateDiv.args = { ...messageData, type: 'date' };

export const textDiv = Template.bind({});
textDiv.args = { ...messageData, text: 'сегодня', type: 'text' };
