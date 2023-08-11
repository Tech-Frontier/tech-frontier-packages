import { css } from '../styled-system/css';
import { TypographyRank } from './types';

export const typographyFontSize: Record<TypographyRank, string> = {
  '1': css({
    fontSize: '32px',
  }),
  '2': css({
    fontSize: '26px',
  }),
  '3': css({
    fontSize: '22px',
  }),
  '4': css({
    fontSize: '20px',
  }),
  '5': css({
    fontSize: '16px',
  }),
  '6': css({
    fontSize: '14px',
  }),
};

export const typographyFontWeight:Record<TypographyRank, string> = {
  '1': css({
    fontWeight: 'bold',
  }),
  '2': css({
    fontWeight: 'bold',
  }),
  '3': css({
    fontWeight: 'bold',
  }),
  '4': css({
    fontWeight: 'bold',
  }),
  '5': css({
    fontWeight: 'normal',
  }),
  '6': css({
    fontWeight: 'normal',
  }),
};
