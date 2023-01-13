import { useState, createContext, useMemo } from 'react';
import { createTheme } from '@mui/material';

export const tokens = mode => ({
  ...(mode === 'dark'
    ? {
        accentBlue: {
          DEFAULT: '#1900D5',
          50: '#9B8EFF',
          100: '#8979FF',
          200: '#6550FF',
          300: '#4128FF',
          400: '#1E00FE',
          500: '#1900D5',
          600: '#12009D',
          700: '#0C0065',
          800: '#05002D',
          900: '#000000',
        },
      }
    : {}),
});

export const themeSettings = mode => {
  const colors = tokens(mode);
};
