import { css, FlattenInterpolation } from '..';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';

export type BreakpointLimit =
  { under: Breakpoint, over?: Breakpoint } |
  { under?: Breakpoint, over: Breakpoint };

const breakpointVariablesMatrix = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
} as const;

const getBreakpointValue = (breakPoint: Breakpoint) => breakpointVariablesMatrix[breakPoint];
const getMinWidth = (val: Breakpoint) => (
  `min-width: ${getBreakpointValue(val)}`
);

const getMaxWidth = (val: Breakpoint) => (
  `max-width: ${getBreakpointValue(val)}`
);

const getMediaLimit = (
  limit: BreakpointLimit,
  min: keyof BreakpointLimit,
  max: keyof BreakpointLimit,
): string => {
  const minValue = limit[min] as Breakpoint;
  const maxValue = limit[max] as Breakpoint;

  if (minValue && maxValue) {
    return `${getMinWidth(minValue)}) and (${getMaxWidth(maxValue)}`;
  }
  if (maxValue) return getMaxWidth(maxValue);
  if (minValue) return getMinWidth(minValue);
  throw Error('Media limit not recognized.');
};

const getStylesheetMediaBlock = (
  min: keyof BreakpointLimit,
  max: keyof BreakpointLimit,
  limit: BreakpointLimit | undefined,
  applyCss: string | FlattenInterpolation,
  defaultCss: string | FlattenInterpolation,
) => {
  if (!limit) {
    return defaultCss;
  }

  return css`
    @media (${getMediaLimit(limit, min, max)}) {
      ${applyCss}
    }
  `;
};

export const cssUseBreakpoint = (
  limit: BreakpointLimit | undefined,
  positiveCss: string | FlattenInterpolation,
  defaultCss: string | FlattenInterpolation = '',
) => getStylesheetMediaBlock(
  'over',
  'under',
  limit,
  positiveCss,
  defaultCss,
);

export const cssUseOutOfBreakpoint = (
  limit: BreakpointLimit | undefined,
  negativeCss: string | FlattenInterpolation,
  defaultCss: string | FlattenInterpolation = negativeCss,
) => getStylesheetMediaBlock(
  'under',
  'over',
  limit,
  negativeCss,
  defaultCss,
);

export const cssHideForBreakpoint = (hideFor: BreakpointLimit) => (
  cssUseBreakpoint(hideFor, css`display: none !important;`)
);
