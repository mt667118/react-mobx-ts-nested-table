import React from 'react';

interface Props {
  colSpan?: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const TableCell: React.FC<Props> = ({ children, colSpan, onClick }) => {
  return (
    <td colSpan={colSpan} onClick={onClick}>
      {children}
    </td>
  );
};

export default TableCell;
