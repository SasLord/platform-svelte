import ASMemberList from './ASMemberList.svelte';

export default {
    title: 'Panels/aSide/ASMemberList',
    component: ASMemberList,
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
    Component: ASMemberList,
    props: {
            ...args,
        theme: args.theme
    }
});

const membersData = {
    members: [{
        src: 'https://platform.exhale24.ru/images/photo-1.png',
        name: 'Александр Алексеенко',
        status: 'accept',
    }, {
        src: 'https://platform.exhale24.ru/images/photo-3.png',
        name: 'Сергей Буевич',
        status: 'reject',
    }],
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...membersData };
