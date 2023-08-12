import { Button, ButtonProps } from './Button';

const TextStory = {
  title: 'Component/Button',
  argTypes: {
    children: { control: 'text' },
    display: {
      control: {
        type: 'select',
        options: ['inline', 'block'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  component: Button,
};

export const Playground = {
  args: {
    children: 'button',
    display: 'inline',
    size: 'medium',
    bgColor: '#9CC5A1',
    textColor: '#1F2421',
  },
  render: (args: ButtonProps) => <Button {...args} />,
};

export default TextStory;
