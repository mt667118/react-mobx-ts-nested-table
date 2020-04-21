import TableCellHeader from 'components/UberTable/TableCellHeader';
import TableHeader from 'components/UberTable/TableHeader';
import TableRow from 'components/UberTable/TableRow';
import React from 'react';

const RelativeHeader = () => {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableCellHeader colSpan={5}>has_relatives</TableCellHeader>
        </TableRow>
        <TableRow>
          <TableCellHeader />
          <TableCellHeader>Relative ID</TableCellHeader>
          <TableCellHeader>Patient ID</TableCellHeader>
          <TableCellHeader>Is alive?</TableCellHeader>
          <TableCellHeader>Frequency of visits</TableCellHeader>
        </TableRow>
      </TableHeader>
    </>
  );
};

export default RelativeHeader;
