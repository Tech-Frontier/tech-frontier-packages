import { ButtonHTMLAttributes, CSSProperties, Ref, forwardRef } from 'react';
import { cx } from '../styled-system/css';
import { buttonBaseStyle, buttonDisplayStyle, buttonSizeStyle } from './style';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  display?: 'inline' | 'block';
  size?: 'small' | 'medium' | 'large';
  bgColor?: CSSProperties['backgroundColor'];
  textColor?: CSSProperties['color'];
};

export const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { display = 'inline', size = 'medium', bgColor, textColor, children, ...restProps } = props;

  return (
   <button
    ref={ref}
    style={{
      color: textColor ?? '#1F2421',
      backgroundColor: bgColor ?? '#9CC5A1',
    }}
    className={cx(
      buttonBaseStyle,
      buttonDisplayStyle[display],
      buttonSizeStyle[size],
    )}
    {...restProps}
  >
    {children}
   </button>
  );
});

Button.displayName = 'Button';
