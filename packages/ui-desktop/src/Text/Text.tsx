import { HTMLAttributes, CSSProperties, ElementType, ReactNode } from 'react';
import { css, cx } from '../styled-system/css';
import { typographyFontSize, typographyFontWeight } from './style';
import { TypographySize, FontWeight } from './types';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  rank?: TypographySize;
  color?: CSSProperties['color'];
  fontWeight?: FontWeight;
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Text({
  rank = '5',
  as: Component = 'p',
  color,
  fontWeight,
  ...restProps
}: TextProps) {
  return (
    <Component className={cx(
      css({ color }),
      typographyFontSize[rank],
      fontWeight ? css({ fontWeight }) : typographyFontWeight[rank],
    )}
    {...restProps}
    />
  );
}
