import ASAuthor from './ASAuthor.svelte';

export default {
    title: 'Panels/aSide/ASAuthor',
    component: ASAuthor,
    argTypes: {
        src: { control: 'text' },
        name: { control: 'text' },
        date: { control: 'date' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: ASAuthor,
    props: {
        author: {
            ...args,
        },
        theme: args.theme
    }
});

const authorData = {
    src: 'https://platform.exhale24.ru/images/photo-1.png',
    name: 'Александр Алексеенко',
    date: new Date(2020, 10, 30, 15, 30),
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...authorData };
