// index.ts
import {lightColors, darkColors} from './colors';
import {fonts} from './fonts';
import {spacing} from './spacing';

export const getTheme = (isDarkMode: boolean) => {
  const colors = isDarkMode ? darkColors : lightColors;

  return {
    colors,
    fonts,
    spacing,
    // Add other theme properties as needed
  };
};
