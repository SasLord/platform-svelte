import ASMeeting from './ASMeeting.svelte';

export default {
    title: 'Panels/aSide/ASMeeting',
    component: ASMeeting,
    argTypes: {
        meetDate: { control: 'date' },
        meetTime: { control: 'text' },
        members: { control: 'text' },
        desc: { control: 'text' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: ASMeeting,
    props: {
        ...args,
        theme: args.theme
    }
});

const meetData = {
    meet: {
        meetDate: new Date(),
        meetTime: '00:00 - 12:00',
        members: [{
            src: 'https://platform.exhale24.ru/images/photo-1.png',
            name: 'Александр Алексеенко',
            status: 'accept',
        }, {
            src: 'https://platform.exhale24.ru/images/photo-3.png',
            name: 'Сергей Буевич',
            status: 'reject',
        }],
        desc: '<p>Description</p>'
    },
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...meetData };
