import ASMember from './ASMember.svelte';

export default {
    title: 'Panels/aSide/ASMember',
    component: ASMember,
    argTypes: {
        src: { control: 'text' },
        name: { control: 'text' },
        status: {
            control: { type: 'select', options: ['performer', 'accept', 'reject'] },
        },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: ASMember,
    props: {
        member: {
            ...args,
        },
        theme: args.theme
    }
});

const memberData = {
    src: 'https://platform.exhale24.ru/images/photo-1.png',
    name: 'Александр Алексеенко',
    status: 'accept',
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...memberData };
