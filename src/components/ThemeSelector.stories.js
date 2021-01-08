import ThemeSelector from './ThemeSelector.svelte';

export default {
  title: 'Chat/ThemeSelector',
  component: ThemeSelector,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

const Template = ({ onChange }) => ({
  Component: ThemeSelector,
  on: {
    change: onChange,
  },
});

export const defaultThemeSelector = Template.bind({});
