import * as React from 'react';
import * as styledComponents from 'styled-components';
import {
  ThemedStyledComponentsModule,
  StyledComponent,
  FlattenInterpolation,
  ThemeProps,
  StyledComponentPropsWithRef,
} from 'styled-components';

import { ThemeType } from './theme';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeType>;

export type ThemedStyledComponent<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  O extends object = {},
  A extends keyof any = never
> = StyledComponent<C, ThemeType, O, A>;

export type ThemedFlattenInterpolation = FlattenInterpolation<ThemeProps<ThemeType>>;

export type { StyledComponentPropsWithRef };

type BaseComponentType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export {
  css,
  keyframes,
  ThemeProvider,
};

export default styled;
