import Board from "./Board.svelte";

export default {
  title: "Chat/Board",
  component: Board,
  argTypes: {
    theme: {
      control: { type: "select", options: ["Transperent", "Biege", "Black"] },
    },
    onMessage: { action: "onMessage" },
  },
};

const Template = ({ onMessage, ...args }) => ({
  Component: Board,
  props: args,
  on: {
    message: onMessage,
  },
});

export const defaultBoard = Template.bind({});
defaultBoard.args = {
  theme: "Transperent",
};
