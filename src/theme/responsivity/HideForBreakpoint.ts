import { styled } from '..';
import {
  BreakpointLimit,
  cssHideForBreakpoint,
} from './breakpoints';

export type HideForBreakpointProps = {
  hideWhen?: BreakpointLimit,
};

const HideForBreakpoint = styled.div<HideForBreakpointProps>`
  ${({ hideWhen }) => hideWhen && cssHideForBreakpoint(hideWhen)}
`;

export default HideForBreakpoint;
