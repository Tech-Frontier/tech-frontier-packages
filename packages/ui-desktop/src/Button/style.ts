import { css } from '../styled-system/css';

export const buttonBaseStyle = css({
  margin: 0,
  fontWeight: 600,
  verticalAlign: 'middle',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '10px',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:not(:disabled)': {
    '&:hover': {
      opacity: 0.9,
    },
    '&:active': {
      filter: 'contrast(0.9)',
    },
  },
});

export const buttonDisplayStyle = {
  inline: css({
    display: 'inline-block',
  }),
  block: css({
    display: 'block',
    width: '100%',
  }),
};

export const buttonSizeStyle = {
  small: css({
    fontSize: '14px',
    padding: '7px 12px',
    borderRadius: '6px',
  }),
  medium: css({
    fontSize: '15px',
    padding: '9px 16px',
    borderRadius: '7px',
  }),
  large: css({
    fontSize: '16px',
    padding: '11px 22px',
    borderRadius: '8px',
  }),
};
