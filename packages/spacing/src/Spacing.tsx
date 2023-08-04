import { memo, HTMLAttributes } from 'react';

type SpacingProps = HTMLAttributes<HTMLDivElement> & {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
};

export const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: SpacingProps) {
  const { style, ...otherProps } = props;

  return (
    <div
      style={{
        flex: 'none',
        width: direction === 'horizontal' ? `${size}px` : undefined,
        height: direction === 'vertical' ? `${size}px` : undefined,
        ...style,
      }}
      {...otherProps}
    />
  );
});
