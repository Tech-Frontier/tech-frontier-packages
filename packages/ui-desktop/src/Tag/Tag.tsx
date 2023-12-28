import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { css, cx } from '../styled-system/css';
import { tagBaseStyle, tagSizeStyle } from './style';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large';
  bgColor?: CSSProperties['backgroundColor'];
  textColor?: CSSProperties['color'];
  children: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
}

// NOTE: leftAddon, rightAddon 추후 지원...

export function Tag({
  bgColor,
  textColor,
  size = 'medium',
  children,
  className: classNameFromProps,
  leftAddon,
  rightAddon,
  ...restProps
}: TagProps) {
  return (
    <span
      style={{
        color: textColor ?? '#DCE1DE',
        backgroundColor: bgColor ?? '#9CC5A1',
      }}
      className={cx(tagBaseStyle, tagSizeStyle[size], classNameFromProps)}
      {...restProps}
    >
      {leftAddon && (
        <span
          className={css({
            marginRight: '4px',
          })}
        >
          {leftAddon}
        </span>
      )}

      {children}

      {rightAddon && (
        <span
          className={css({
            marginLeft: '4px',
          })}
        >
          {rightAddon}
        </span>
      )}
    </span>
  );
}
