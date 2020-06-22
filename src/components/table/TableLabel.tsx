import { styled } from '../../theme';
import HideForBreakpoint from '../../theme/responsivity/HideForBreakpoint';

const TableLabel = styled(HideForBreakpoint)`
  color: ${({ theme }) => theme.colors.textDimmed};
`;

export default TableLabel;
