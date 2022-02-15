import {createContext, useContext} from 'react';

export const defaultTheme = {
  primary: '#ff5800',
  secondary: '#00bbdd',
  textPrimary: '#333333',
  textSecondary: '#2a2a2a',
  background: '#ffffec',
};

export type Theme = typeof defaultTheme;

export const ThemeContext = createContext(defaultTheme);

export const useTheme = () => {
  return useContext(ThemeContext);
};
