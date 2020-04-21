import TableCell from 'components/UberTable/TableCell';
import TableRow from 'components/UberTable/TableRow';
import React from 'react';

interface Props {
  rowData: { [key: string]: string };
}

const PhoneRow: React.FC<Props> = ({ rowData }) => {
  if (rowData == null) {
    return null;
  }
  return (
    <>
      <TableRow>
        <TableCell>{rowData['Phone ID']}</TableCell>
        <TableCell>{rowData['ID of the relative']}</TableCell>
        <TableCell>{rowData['Phone']}</TableCell>
      </TableRow>
    </>
  );
};

export default PhoneRow;
