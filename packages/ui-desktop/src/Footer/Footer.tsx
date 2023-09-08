import { HTMLAttributes, forwardRef } from 'react';
import { cx } from '../styled-system/css';

type FooterProps = HTMLAttributes<HTMLDivElement>;

export const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) =>{
  const { children, className: classNameFromProps, ...restProps } = props;

  return (
    <footer ref={ref} className={cx(classNameFromProps)} {...restProps}>{children}</footer>
  );
});

Footer.displayName = 'Footer';
