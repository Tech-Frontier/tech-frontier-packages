import { HTMLAttributes, forwardRef } from 'react';
import { cx } from '../../styled-system/css';
import { headerImageStyle, headerInnerStyle } from '../style';

type HeaderLogoProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt?: string;
};

export const HeaderLogo = forwardRef<HTMLDivElement, HeaderLogoProps>((props, ref) => {
  const { children, src, alt, ...restProps } = props;

  return (
      <div ref={ref} className={cx(headerInnerStyle)} {...restProps}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          className={cx(headerImageStyle)}
          alt={alt}
        />
      </div>
  );
});

HeaderLogo.displayName = 'Header.Logo';
