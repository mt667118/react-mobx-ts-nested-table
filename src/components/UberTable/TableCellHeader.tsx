import React from 'react';

interface Props {
  colSpan?: number;
  children?: React.ReactNode;
}

const TableCellHeader: React.FC<Props> = ({ children, colSpan }) => {
  return <th colSpan={colSpan}>{children}</th>;
};

export default TableCellHeader;
