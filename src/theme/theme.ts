import backgroundVariants from './variants/backgroundVariants';
import borderVariants from './variants/borderVariants';
import colorVariants from './variants/colorVariants';
import sizingVariants from './variants/sizingVariants';
import spacingVariants from './variants/spacingVariants';

/**
 * Default theme object.
 */
export const defaultTheme = {
  backgrounds: backgroundVariants.light,
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
  spacing: spacingVariants,
  borders: borderVariants,
  sizing: sizingVariants,
};

export default defaultTheme;
