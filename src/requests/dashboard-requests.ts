import { ax } from './axios-config';

export const getTableData = async () => {
  return await ax.get('data-1.json');
};
