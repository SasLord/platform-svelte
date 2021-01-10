import AShtml from './AShtml.svelte';

export default {
    title: 'Panels/aSide/AShtml',
    component: AShtml,
    argTypes: {
        textHtml: { control: 'text' },
        theme: {
            control: { type: 'select', options: ['Transperent', 'Biege', 'Black'] },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: AShtml,
    props: {
        ...args,
        theme: args.theme
    }
});

const textData = {
    textHtml: '<p>Text</p>',
    theme: 'Transperent'
};

export const Default = Template.bind({});
Default.args = { ...textData };
