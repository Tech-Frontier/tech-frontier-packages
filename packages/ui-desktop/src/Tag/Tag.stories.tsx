import { Tag, TagProps } from './Tag';

const Story = {
  title: 'Component/Tag',
  argTypes: {
    children: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
  component: Tag,
};

export const Playground = {
  args: {
    children: 'Tag',
    size: 'medium',
  },
  render: (args: TagProps) => (
    <>
      <Tag {...args} />

      <br />

      <br />

      <Tag {...args} leftAddon={<button>왼쪽</button>} rightAddon={<button>오른쪽</button>} />
    </>
  ),
};

export default Story;
