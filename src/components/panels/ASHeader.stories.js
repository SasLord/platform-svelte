import ASHeader from './ASHeader.svelte';

export default {
    title: 'Panels/aSide/ASHeader',
    component: ASHeader,
    argTypes: {
        title: { control: 'text' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: ASHeader,
    props: {
        ...args,
    }
});

const messageData = {
    title: 'Title',
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...messageData };
