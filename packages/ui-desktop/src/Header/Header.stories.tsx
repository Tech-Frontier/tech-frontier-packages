import { Text } from '../Text';
import { Header, HeaderProps } from './Header';
import { HeaderLogoProps } from './compound/HeaderLogo';

const Story = {
  title: 'Component/Header',
  argTypes: {
  },
  component: Header,
};

export const LogoWithHeader = {
  args: {
    src: 'https://cdn.trendy-tracker.kr/logo.png',
  },
  render: (args: HeaderLogoProps) => {
    return (
      <section style={{ backgroundColor: '#000' }}>
        <Header>
          <Header.Logo src={args.src} />
        </Header>

        <div style={{ color: '#fff' }}>
          docs에서는 이상하게 보여요<br />
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
          <Text rank='1' color="#fff" as="h1">test</Text>
        </Header>

        <div style={{ color: '#fff' }}>
          docs에서는 이상하게 보여요<br />
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
