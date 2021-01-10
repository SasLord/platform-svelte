import ASMeetDescription from './ASMeetDescription.svelte';

export default {
    title: 'Panels/aSide/ASMeetDescription',
    component: ASMeetDescription,
    argTypes: {
        desc: { control: 'text' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: ASMeetDescription,
    props: {
        ...args,
        theme: args.theme
    }
});

const textData = {
    desc: '<p>Text</p>',
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...textData };
