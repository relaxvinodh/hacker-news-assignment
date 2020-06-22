import TableFieldGroup from './TableFieldGroup';
import { styled } from '../../theme';

const TableRow = styled(TableFieldGroup)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: ${({ theme }) => theme.spacing.listPadding};
`;

export default TableRow;
