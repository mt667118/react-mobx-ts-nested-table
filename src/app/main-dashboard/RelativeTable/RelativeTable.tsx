import RelativeHeader from 'app/main-dashboard/RelativeTable/RelativeHeader';
import RelativeRow from 'app/main-dashboard/RelativeTable/RelativeRow';
import ExpandableTable from 'components/UberTable/ExpandableTable';
import TableBody from 'components/UberTable/TableBody';
import TableCell from 'components/UberTable/TableCell';
import TableRow from 'components/UberTable/TableRow';
import React from 'react';
import { HasRelativesRecord } from 'types/PersonTable';

interface Props {
  tableData?: HasRelativesRecord[];
}

const RelativeTable: React.FC<Props> = ({ tableData }) => {
  let rows: JSX.Element[] = [];
  if (tableData) {
    rows = tableData.map((relative: HasRelativesRecord) => {
      return (
        <RelativeRow
          rowData={relative.data}
          kids={relative.kids}
          key={relative.data['Relative ID']}
        />
      );
    });
  }
  return (
    <>
      <TableRow>
        <TableCell colSpan={12}>
          <ExpandableTable>
            <RelativeHeader />
            <TableBody>{rows}</TableBody>
          </ExpandableTable>
        </TableCell>
      </TableRow>
    </>
  );
};

export default RelativeTable;
