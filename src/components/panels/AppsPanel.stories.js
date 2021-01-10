import AppsPanel from './AppsPanel.svelte';

export default {
    title: 'Panels/AppsPanel',
    component: AppsPanel,
    argTypes: {
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: AppsPanel,
    props: {
        ...args,
    }
});

const messageData = {
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...messageData };
