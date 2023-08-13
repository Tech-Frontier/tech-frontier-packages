import { css } from '../styled-system/css';

export const headerBaseStyle = css({
  position: 'fixed',
  top: 0,
  height: '48px',
  width: '100%',
});

export const headerMoldStyle = css({
  position: 'relative',
  top: 0,
  height: '48px',
  width: '100%',
});

export const headerInnerStyle = css({
  width: '92%',
  maxWidth: 'calc(100% - 48px)',
  height: '100%',
  margin: '0 auto',
});

export const headerImageStyle = css({
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',

});
