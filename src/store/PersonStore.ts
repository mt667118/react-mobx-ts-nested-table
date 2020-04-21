import { action, observable, runInAction } from 'mobx';
import { getTableData } from 'requests/dashboard-requests';
import { Person } from 'types/PersonTable';

export class PersonStore {
  @observable tableData: Person[] = [];
  @observable isLoading = false;

  @action
  removePersonEntry(personId: string) {
    this.tableData = this.tableData.filter(person => {
      return person.data['Identification number'] !== personId;
    });
  }

  fetchPersonTableData = async () => {
    runInAction(() => {
      this.isLoading = true;
    });

    await setTimeout(async () => {
      const response = await getTableData();
      const data = response.data;
      runInAction(() => {
        this.isLoading = false;
        this.tableData = data;
      });
    }, 3000);
  };
}

export const personStore = new PersonStore();
