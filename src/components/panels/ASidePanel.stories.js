import ASidePanel from './ASidePanel.svelte';

export default {
    title: 'Panels/aSide/ASidePanel',
    component: ASidePanel,
    argTypes: {
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: ASidePanel,
    props: {
        ...args,
    }
});

const messageData = {
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...messageData };
