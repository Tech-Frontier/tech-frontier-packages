import { HTMLAttributes, forwardRef } from 'react';
import { Text } from '../../Text';
import { css, cx } from '../../styled-system/css';
import { headerImageStyle, headerInnerStyle } from '../style';

type HeaderLogoProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
};

export const HeaderLogo = forwardRef<HTMLDivElement, HeaderLogoProps>((props, ref) => {
  const { children, src, alt, ...restProps } = props;

  return (
      <div ref={ref} className={cx(headerInnerStyle)} {...restProps}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src ?? '/resources/logo.png' }
          className={cx(headerImageStyle)}
          alt={alt}
        />
      </div>
  );
});

HeaderLogo.displayName = 'Header.Logo';

export const HeaderLogoText = forwardRef<HTMLDivElement, HeaderLogoProps>((props, ref) => {
  const { children, color, ...restProps } = props;

  return (
    <div ref={ref} className={cx(headerInnerStyle)} {...restProps}>
      <Text
        as='h1'
        rank='1'
        color={color ?? 'white'}
        className={css({ display: 'flex', alignItems: 'center', height: '100%' })}
      >
        {children}
      </Text>
    </div>
  );
});

HeaderLogoText.displayName = 'Header.LogoText';
