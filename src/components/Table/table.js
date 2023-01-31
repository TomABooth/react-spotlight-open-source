import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';
import './table.css';

const dataList = [
  { id: 1, brand: 'Sony', model: 'A1', megapixels: '50' },
  { id: 2, brand: 'Sony', model: 'A7RV', megapixels: '61' },
  { id: 3, brand: 'Canon', model: 'R5', megapixels: '45' },
  { id: 4, brand: 'Canon', model: 'R3', megapixels: '24' },
];

export default function chart() {
  return (
    <div className="table">
      <Table data={dataList}>
        <Column width={100} sortable fixed resizable align="center">
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} sortable fixed resizable align="center">
          <HeaderCell>Brand</HeaderCell>
          <Cell dataKey="brand" />
        </Column>

        <Column width={100} sortable fixed resizable>
          <HeaderCell>Model</HeaderCell>
          <Cell dataKey="model"></Cell>
        </Column>

        <Column width={100} fixed resizable>
          <HeaderCell>Megapixels</HeaderCell>
          <Cell dataKey="megapixels" />
        </Column>
      </Table>
    </div>
  );
}
