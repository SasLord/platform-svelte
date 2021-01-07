import Caption from './Caption.svelte';

export default {
    title: 'Chat/Caption',
    component: Caption,
    argTypes: {
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: Caption,
    props: {
        ...args,
    }
});

const messageData = {
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...messageData };
