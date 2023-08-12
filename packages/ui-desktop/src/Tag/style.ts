import { css } from '../styled-system/css';

export const tagBaseStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  cursor: 'pointer',
});

export const tagSizeStyle = {
  'small': css({
    fontSize: '13px',
    padding: '1px 8px',
    borderRadius: '18px',
  }),
  'medium': css({
    fontSize: '14px',
    padding: '2px 10px',
    borderRadius: '20px',
  }),
  'large': css({
    fontSize: '15px',
    padding: '4px 12px',
    borderRadius: '16px',
  }),
};
