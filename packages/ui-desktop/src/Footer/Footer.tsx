import { HTMLAttributes, forwardRef } from 'react';

type FooterProps = HTMLAttributes<HTMLDivElement>;

export const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) =>{
  const { children, ...restProps } = props;

  return (
    <footer ref={ref} {...restProps}>{children}</footer>
  );
});

Footer.displayName = 'Footer';
