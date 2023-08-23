import { HTMLAttributes, forwardRef } from 'react';
import { cx } from '../styled-system/css';
import { HeaderLogo } from './compound';
import { headerBaseStyle, headerMoldStyle } from './style';

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export const HeaderImpl = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { children, ...restProps } = props;
  // const [isScroll, setIsScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = document.documentElement.scrollTop;
  //     if (scrollTop > 0) {
  //       setIsScroll(true);
  //     } else {
  //       setIsScroll(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <header
        ref={ref}
        // className={cx(headerBaseStyle, isScroll && css({ backdropFilter: 'blur(10px)' }))}
        className={cx(headerBaseStyle)}
        {...restProps}
      >
        {children}
      </header>

      <div className={cx(headerMoldStyle)} />
    </>
  );
});

HeaderImpl.displayName = 'Header';

export const Header = Object.assign(HeaderImpl, {
  Logo: HeaderLogo,
});
