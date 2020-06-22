import { styled } from '../../theme';
import {
  BreakpointLimit,
  cssHideForBreakpoint,
} from '../../theme/responsivity/breakpoints';

type TableHeaderProps = {
  hideWhen?: BreakpointLimit;
};

const TableHeader = styled.div<TableHeaderProps>`
  ${({ hideWhen }) => hideWhen && cssHideForBreakpoint(hideWhen)};
`;

export default TableHeader;
