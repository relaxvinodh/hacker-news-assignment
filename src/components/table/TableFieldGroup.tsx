import {
  BreakpointLimit,
  cssUseBreakpoint,
  cssUseOutOfBreakpoint,
} from '../../theme/responsivity/breakpoints';
import { StyledComponent, css, styled } from '../../theme';
import TableBody from './TableBody';
import TableLabel from './TableLabel';
import TableField, { TableFieldBase } from './TableField';
import TableHeader from './TableHeader';

type TableFieldGroupProps = {
  wrapping?: BreakpointLimit,
};

const TableFieldGroup: StyledComponent<typeof TableFieldBase, TableFieldGroupProps> = (
  styled(TableFieldBase)<TableFieldGroupProps>`
    ${({ wrapping }) => cssUseBreakpoint(wrapping, css`
      ${TableHeader} & > :not(${TableFieldGroup}) ${TableLabel} {
        display: none;
      }

      & ${TableField} {
        width: auto;
      }

      ${TableBody} & :not(${TableFieldGroup}) ${TableLabel} {
        padding-top: ${({ theme }) => theme.spacing?.listPadding}
      }
    `)}

    ${({ wrapping }) => cssUseOutOfBreakpoint(wrapping, css`
      display: flex;

      ${TableBody} & > :not(${TableFieldGroup}) ${TableLabel} {
        display: none;
      }
    `)}
  `
);

export default TableFieldGroup;
