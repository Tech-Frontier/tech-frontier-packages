import { CSSProperties, HTMLAttributes } from 'react';
import { cx } from '../styled-system/css';
import { tagBaseStyle, tagSizeStyle } from './style';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large';
  bgColor?: CSSProperties['backgroundColor'];
  textColor?: CSSProperties['color'];
}

// NOTE: leftAddon, rightAddon 추후 지원...

export function Tag(
  {
    bgColor,
    textColor,
    size = 'medium',
    ...restProps
  }: TagProps) {
  return (
    <span
      style={{
        color: textColor ?? '#DCE1DE',
        backgroundColor: bgColor ?? '#9CC5A1',
      }}
      className={cx(tagBaseStyle, tagSizeStyle[size])}
      {...restProps}
    />
  );
}
