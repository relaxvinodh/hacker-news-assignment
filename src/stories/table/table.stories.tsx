import React from 'react';
import {
  Table, TableField, TableFieldGroup, TableLabel, TableRow,
} from '../../components/table';
import { theme, ThemeProvider } from '../../theme';
import { IRecord, rows } from './mockData';

export default {
  title: 'Table',
  component: Table,
};

export const baseUsage = () => {
  const renderRow = (row?: IRecord) => (
    <TableRow wrapping={{ under: 'md' }} key={row?.id}>
      <TableFieldGroup ratio="2" wrapping={{ under: 'xs' }}>
        <TableField minWidth="100">
          <TableLabel>Status</TableLabel>
          {/* <div>{row && formatStatus(row.status)}</div> */}
          <TableLabel hideWhen={{ over: 'xs' }}>ID</TableLabel>
          <div>{row?.id}</div>
        </TableField>
        <TableField minWidth="150">
          <TableLabel hideWhen={{ under: 'xs' }}>Last update</TableLabel>
          <TableLabel hideWhen={{ over: 'xs' }}>Updated at</TableLabel>
          {/* <div>{row && formatters.date.formatDate(row.lastUpdate)}</div> */}
          <TableLabel hideWhen={{ over: 'xs' }}>Updated by</TableLabel>
          {/* <UpdatedByContainer>{row && row.lastUpdateBy}</UpdatedByContainer> */}
        </TableField>
        <TableFieldGroup ratio="3" wrapping={{ under: 'xs' }} hideWhen={{ under: 'sm' }}>
          <TableField minWidth="70">
            <TableLabel>Urgency</TableLabel>
            {/* {row && formatUrgency(row.urgency)} */}
          </TableField>
          <TableField minWidth="70">
            <TableLabel>Tickets</TableLabel>
            {row && row.tickets}
          </TableField>
        </TableFieldGroup>
      </TableFieldGroup>
      <TableField minWidth="200">
        <TableLabel>Description</TableLabel>
        {row && row.description}
      </TableField>
      <TableField minWidth="200">
        <TableLabel>Last comment</TableLabel>
        {row?.lastComment && (
          <>
            <span className="text-muted">
              {row.lastCommentCreatedBy}
              {' '}
            </span>
            &nbsp;
            {row.lastComment}
          </>
        )}
      </TableField>
    </TableRow>
  );
  return (
    <ThemeProvider theme={theme}>
      <Table rows={rows} renderRow={renderRow} />
    </ThemeProvider>
  );
};
