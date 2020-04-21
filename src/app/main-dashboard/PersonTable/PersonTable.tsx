import PersonHeader from 'app/main-dashboard/PersonTable/PersonHeader';
import AtmaTwoSpinner from 'components/AtmaTwoSpinner';
import ExpandableTable from 'components/UberTable/ExpandableTable';
import TableBody from 'components/UberTable/TableBody';
import { inject, observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { PersonStore } from 'store/PersonStore';
import { IDENTIFICATION_NUMBER, Person } from 'types/PersonTable';
import PersonRow from './PersonRow/PersonRow';

interface Props {
  personStore?: PersonStore;
}

const PersonTable: React.FC<Props> = inject('personStore')(
  observer(props => {
    useEffect(() => {
      props.personStore?.fetchPersonTableData();
    }, []);

    let tableData: Person[] | undefined;
    tableData = props.personStore?.tableData;
    let rows: JSX.Element[] = [];
    if (tableData) {
      rows = tableData.map((person: Person) => {
        return (
          <PersonRow
            rowData={person.data}
            kids={person.kids}
            key={person.data[IDENTIFICATION_NUMBER]}
          />
        );
      });
    }
    if (props.personStore?.isLoading) {
      return (
        <>
          <AtmaTwoSpinner />
          <div>Loading Person data...</div>
        </>
      );
    } else {
      return (
        <>
          <ExpandableTable>
            <PersonHeader />
            <TableBody>{rows}</TableBody>
          </ExpandableTable>
        </>
      );
    }
  })
);

export default PersonTable;
