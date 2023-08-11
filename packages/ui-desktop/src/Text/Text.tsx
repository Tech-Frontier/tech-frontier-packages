import { HTMLAttributes, CSSProperties, ElementType, ReactNode } from 'react';
import { cx } from '../styled-system/css';
import { typographyFontSize, typographyFontWeight } from './style';
import { TypographyRank, FontWeight } from './types';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  rank?: TypographyRank;
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
    <Component
      style={{
        color,
        fontWeight,
      }}
      className={cx(
        typographyFontSize[rank],
        typographyFontWeight[rank],
      )}
    {...restProps}
    />
  );
}
