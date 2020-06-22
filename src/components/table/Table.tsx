import React from 'react';

import TableBody from './TableBody';
import TableContainer from './TableContainer';
import TableHeader from './TableHeader';
import { StyledComponentPropsWithRef } from '../../theme';

// eslint-disable-next-line max-len
export interface TableProps<T extends any> extends StyledComponentPropsWithRef<typeof TableContainer>{
  /** Row to render, if not provided empty table is shown */
  rows?: T[],

  /** Function to render individual row,
   * will recieve rows from rows property and once without row to get table header */
  renderRow(row?: T): JSX.Element,
}

export const Table = <T extends any>({
  rows = [], renderRow, children, ...otherProps
}: TableProps<T>) => (
  <TableContainer {...otherProps}>
    <TableHeader>
      {renderRow()}
    </TableHeader>

    <TableBody>
      {rows.map((row) => renderRow(row))}
    </TableBody>

    {children}
  </TableContainer>
  );

export default Table;
