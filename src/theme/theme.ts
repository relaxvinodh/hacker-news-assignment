import colorVariants from './variants/colorVariants';
import backgroundVariants from './variants/backgroundVariants';
import fontVariants from './variants/fontVariants';
import spacingVariants from './variants/spacingVariants';
import borderVariants from './variants/borderVariants';
import sizingVariants from './variants/sizingVariants';

/**
 * Default theme object.
 */
export const defaultTheme = {
  backgrounds: backgroundVariants.light,
  fonts: fontVariants.normal,
  spacing: spacingVariants.normal,
  borders: borderVariants.normal,

  colors: colorVariants.light,
  sizing: sizingVariants.normal,
};

export type ThemeType = typeof defaultTheme;

export type ThemeColor = keyof typeof colorVariants.dark;
export type ThemeBackground = keyof typeof backgroundVariants.dark;

export const variations = {
  colors: colorVariants,
  backgrounds: backgroundVariants,
  fonts: fontVariants,
  spacing: spacingVariants,
  borders: borderVariants,
  sizing: sizingVariants,
};

export default defaultTheme;
