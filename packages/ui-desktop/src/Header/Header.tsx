import { HTMLAttributes, forwardRef } from 'react';
import { css } from '../styled-system/css';

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { children, ...restProps } = props;
  return (
    <header ref={ref} {...restProps} className={css({
      backgroundColor: 'black',
    })}>{children}</header>
  );
});

Header.displayName = 'Header';
