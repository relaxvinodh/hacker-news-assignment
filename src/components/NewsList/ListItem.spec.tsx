import { shallow } from 'enzyme';
import React from 'react';
import {
  Table, TableField, TableLabel, TableRow,
} from '../table';

describe('List Item Component', () => {
  it('table renders', () => {
    type Row = {
      id: number,
      name: string,
    };
    const rows: Row[] = [{ id: 1, name: 'first row' }, { id: 2, name: 'second row' }];
    const renderRow = (row?: Row) => (
      <TableRow key={row?.id}>
        <TableField>
          <TableLabel>ID</TableLabel>
          {row && <div data-test-mark="id">{row.id}</div>}
        </TableField>
        <TableField>
          <TableLabel>Name</TableLabel>
          {row && <div data-test-mark="name">{row.name}</div>}
        </TableField>
      </TableRow>
    );

    const wrapper = shallow(
      <Table rows={rows} renderRow={renderRow} />,
    );

    expect(wrapper.find('[data-test-mark="id"]')).toHaveLength(2);
    expect(wrapper.find('[data-test-mark="name"]')).toHaveLength(2);
  });
});
