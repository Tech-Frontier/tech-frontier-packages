import { Header, HeaderProps } from './Header';

const Story = {
  title: 'Component/Header',
  argTypes: {
  },
  component: Header,
};

export const LogoWithHeader = {
  args: {

  },
  render: (args: HeaderProps) => {
    return (
      <section style={{ backgroundColor: '#000' }}>
        <Header {...args}>
          <Header.Logo />
        </Header>
        <div style={{ color: '#fff' }}>
          docs에서는 이상하게 보여요
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
        </div>
      </section>
    );
  },
};

export const LogoTextWithHeader = {
  args: {
  },
  render: (args: HeaderProps) => {
    return (
      <section style={{ backgroundColor: '#000' }}>
        <Header {...args}>
          <Header.LogoText>test</Header.LogoText>
        </Header>
        <div style={{ color: '#fff' }}>
          docs에서는 이상하게 보여요
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eaque quisquam impedit illo velit odit perferendis doloremque, corrupti, tempore rerum dolore, ducimus delectus dignissimos? Alias quasi deserunt qui impedit et.
        </div>
      </section>
    );
  },
};

export default Story;
