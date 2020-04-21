import React from 'react';
import { Table } from 'react-bootstrap';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const ExpandableTable: React.FC<Props> = ({ children, className }) => {
  return <Table className={className}>{children}</Table>;
};

export default ExpandableTable;
