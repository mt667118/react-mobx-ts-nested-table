import TableCellHeader from 'components/UberTable/TableCellHeader';
import TableHeader from 'components/UberTable/TableHeader';
import TableRow from 'components/UberTable/TableRow';
import React from 'react';

function PersonHeader() {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableCellHeader />
          <TableCellHeader>Identification number</TableCellHeader>
          <TableCellHeader>Name</TableCellHeader>
          <TableCellHeader>Gender</TableCellHeader>
          <TableCellHeader>Risk</TableCellHeader>
          <TableCellHeader>Hair length</TableCellHeader>
          <TableCellHeader>IQ</TableCellHeader>
          <TableCellHeader>Admission date</TableCellHeader>
          <TableCellHeader>Last breakdown</TableCellHeader>
          <TableCellHeader>Yearly fee</TableCellHeader>
          <TableCellHeader>Knows the Joker</TableCellHeader>
          <TableCellHeader>Actions</TableCellHeader>
        </TableRow>
      </TableHeader>
    </>
  );
}

export default PersonHeader;
