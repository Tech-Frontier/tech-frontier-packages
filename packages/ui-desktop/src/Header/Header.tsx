import { HTMLAttributes, forwardRef } from 'react';
import { css, cx } from '../styled-system/css';
import { HeaderLogo } from './compound';
import { headerBaseStyle, headerMoldStyle } from './style';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  blur?: boolean;
}

export const HeaderImpl = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { blur, children, className: classNameFromProps, ...restProps } = props;

  return (
    <>
      <header
        ref={ref}
        className={cx(headerBaseStyle, blur && css({ backdropFilter: 'blur(10px)' }), classNameFromProps)}
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
