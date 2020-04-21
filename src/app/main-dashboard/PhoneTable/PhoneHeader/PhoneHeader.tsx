import TableCellHeader from 'components/UberTable/TableCellHeader';
import TableHeader from 'components/UberTable/TableHeader';
import TableRow from 'components/UberTable/TableRow';
import React from 'react';

const PhoneHeader = () => {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableCellHeader colSpan={5}>has_phone</TableCellHeader>
        </TableRow>
        <TableRow>
          <TableCellHeader>Phone ID</TableCellHeader>
          <TableCellHeader>ID of the relative</TableCellHeader>
          <TableCellHeader>Phone</TableCellHeader>
        </TableRow>
      </TableHeader>
    </>
  );
};

export default PhoneHeader;
