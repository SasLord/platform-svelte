import Board from './Board.svelte';

export default {
  title: 'Chat/Board',
  component: Board,
  argTypes: {
    onMessage: { action: 'onMessage' },
  },
};

const Template = ({ onMessage }) => ({
  Component: Board,
  on: {
    message: onMessage,
  },
});

export const defaultBoard = Template.bind({});
