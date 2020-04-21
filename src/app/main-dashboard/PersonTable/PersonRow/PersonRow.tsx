import RelativeTable from 'app/main-dashboard/RelativeTable';
import TableCell from 'components/UberTable/TableCell';
import TableRow from 'components/UberTable/TableRow';
import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PersonStore } from 'store/PersonStore';
import { PersonKids } from 'types/PersonTable';

interface Props {
  rowData: { [key: string]: string };
  kids: PersonKids;
  personStore?: PersonStore;
}

const PersonRow: React.FC<Props> = inject('personStore')(
  observer(props => {
    const [isRelativeTableExpanded, setIsRelativeTableExpanded] = useState(
      false
    );

    if (props.rowData == null) {
      return null;
    }

    const canRenderRelativesTable =
      !!props.kids &&
      !!props.kids.has_relatives &&
      !!props.kids.has_relatives.records;
    const handleExpandRelativeTable = () => {
      setIsRelativeTableExpanded(!isRelativeTableExpanded);
    };

    const handleDeletePerson = (personId: string) => {
      props.personStore?.removePersonEntry(personId);
    };

    return (
      <>
        <TableRow>
          {canRenderRelativesTable ? (
            <TableCell onClick={() => handleExpandRelativeTable()}>
              &gt;
            </TableCell>
          ) : (
            <TableCell>*</TableCell>
          )}
          <TableCell>{props.rowData['Identification number']}</TableCell>
          <TableCell>{props.rowData['Name']}</TableCell>
          <TableCell>{props.rowData['Gender']}</TableCell>
          <TableCell>{props.rowData['Risk']}</TableCell>
          <TableCell>{props.rowData['Hair length']}</TableCell>
          <TableCell>{props.rowData['IQ']}</TableCell>
          <TableCell>{props.rowData['Admission date']}</TableCell>
          <TableCell>{props.rowData['Last breakdown']}</TableCell>
          <TableCell>{props.rowData['Yearly fee']}</TableCell>
          <TableCell>{props.rowData['Knows the Joker?']}</TableCell>
          <TableCell>
            {' '}
            <Button
              onClick={() =>
                handleDeletePerson(props.rowData['Identification number'])
              }
              variant="primary"
            >
              remove
            </Button>
          </TableCell>
        </TableRow>
        {isRelativeTableExpanded && (
          <RelativeTable tableData={props.kids.has_relatives?.records} />
        )}
      </>
    );
  })
);

export default PersonRow;
