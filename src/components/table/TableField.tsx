import { css, styled } from '../../theme';
import { cssHideForBreakpoint, BreakpointLimit } from '../../theme/responsivity/breakpoints';

export type TableFieldContainerProps = {
  /**
   * Ratio of column co-pared to others (Result width should be ratio / sum(ratio)), default is 1
   */
  ratio?: string | number;
  minWidth?: string | number;
  hideWhen?: BreakpointLimit;
  verticalAlign?: boolean
};

export const TableFieldBase = styled.div<TableFieldContainerProps>`
  flex: ${({ ratio }) => ratio || 1} 0 0;

  ${({ minWidth }) => minWidth && css`width: ${minWidth}px;`};
  ${({ hideWhen }) => hideWhen && cssHideForBreakpoint(hideWhen)};
  
  ${({ verticalAlign }) => verticalAlign && css`align-items: center`};
`;

const TableField = styled(TableFieldBase)`
  padding: ${({ theme }) => `${theme.spacing.minimalTextPadding} ${theme.spacing.horizontalPadding}`};

  overflow: hidden;
  text-overflow: ellipsis;
  div {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
  }
`;

export default TableField;
