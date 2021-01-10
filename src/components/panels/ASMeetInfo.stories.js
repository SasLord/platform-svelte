import ASMeetInfo from './ASMeetInfo.svelte';

export default {
    title: 'Panels/aSide/ASMeetInfo',
    component: ASMeetInfo,
    argTypes: {
        meetDate: { control: 'date' },
        meetTime: { control: 'text' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: ASMeetInfo,
    props: {
        ...args,
    }
});

const meetData = {
    meetDate: new Date(),
    meetTime: '9:30 - 10:00',
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...meetData };
