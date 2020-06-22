import type { ThemedStyledComponent, ThemedFlattenInterpolation, StyledComponentPropsWithRef } from './styled';
import type { ThemeType } from './theme';

export type {
  ThemedStyledComponent as StyledComponent,
  ThemedFlattenInterpolation as FlattenInterpolation, StyledComponentPropsWithRef, ThemeType,
};

export { default as styled, ThemeProvider, css } from './styled';
export { default as theme } from './theme';
export {
  default as ThemeVariation, DarkBlock, SetBackground, ColorBlock,
} from './ThemeVariation';
