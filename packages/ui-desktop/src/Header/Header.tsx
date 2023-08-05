import { HTMLAttributes, forwardRef } from 'react';

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { children, ...restProps } = props;
  return (
    <header ref={ref} {...restProps}>{children}</header>
  );
});

Header.displayName = 'Header';
