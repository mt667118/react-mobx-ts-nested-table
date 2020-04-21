import PhoneTable from 'app/main-dashboard/PhoneTable';
import TableCell from 'components/UberTable/TableCell';
import TableRow from 'components/UberTable/TableRow';
import React, { useState } from 'react';
import { RelativeKids } from 'types/PersonTable';

interface Props {
  rowData: { [key: string]: string };
  kids: RelativeKids;
}

const RelativeRow: React.FC<Props> = ({ rowData, kids }) => {
  const [isPhoneTableExpanded, setIsPhoneTableExpanded] = useState(false);

  if (rowData == null) {
    return null;
  }

  const canRenderRelativesTable =
    !!kids && !!kids.has_phone && !!kids.has_phone?.records;
  const handleExpandPhoneTable = () => {
    setIsPhoneTableExpanded(!isPhoneTableExpanded);
  };

  return (
    <>
      <TableRow>
        {canRenderRelativesTable ? (
          <TableCell onClick={() => handleExpandPhoneTable()}>&gt;</TableCell>
        ) : (
          <TableCell>*</TableCell>
        )}
        <TableCell>{rowData['Relative ID']}</TableCell>
        <TableCell>{rowData['Patient ID']}</TableCell>
        <TableCell>{rowData['Is alive?']}</TableCell>
        <TableCell>{rowData['Frequency of visits']}</TableCell>
      </TableRow>
      {isPhoneTableExpanded && (
        <PhoneTable tableData={kids.has_phone?.records} />
      )}
    </>
  );
};

export default RelativeRow;
