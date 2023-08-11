import { Text, TextProps } from './Text';

const TextStory = {
  title: 'Component/Text',
  argTypes: {
    children: { control: 'text' },
    rank: {
      control: {
        type: 'select',
        options: ['1', '2', '3', '4', '5', '6'],
      },
    },
    color: { control: 'color' },
    fontWeight: {
      control: {
        type: 'select',
        options: ['normal', 'bold'],
      },
    },
  },
  component: Text,
};

export const Playground = {
  args: {
    children: 'Text',
    rank: '5',
    color: '#000000',
    fontWeight: 'normal',
  },
  render: (args: TextProps) => <Text {...args} />,
};

export default TextStory;
