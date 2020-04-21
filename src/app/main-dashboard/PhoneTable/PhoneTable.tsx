import ExpandableTable from 'components/UberTable/ExpandableTable';
import TableBody from 'components/UberTable/TableBody';
import TableCell from 'components/UberTable/TableCell';
import TableRow from 'components/UberTable/TableRow';
import React from 'react';
import { HasPhoneRecord } from 'types/PersonTable';

import PhoneHeader from './PhoneHeader';
import PhoneRow from './PhoneRow';

interface Props {
  tableData?: HasPhoneRecord[];
}

const PhoneTable: React.FC<Props> = ({ tableData }) => {
  let rows: JSX.Element[] = [];
  if (tableData) {
    rows = tableData.map((phone: HasPhoneRecord) => {
      return <PhoneRow rowData={phone.data} key={phone.data['Phone ID']} />;
    });
  }
  return (
    <>
      <TableRow>
        <TableCell colSpan={12}>
          <ExpandableTable>
            <PhoneHeader />
            <TableBody>{rows}</TableBody>
          </ExpandableTable>
        </TableCell>
      </TableRow>
    </>
  );
};

export default PhoneTable;
