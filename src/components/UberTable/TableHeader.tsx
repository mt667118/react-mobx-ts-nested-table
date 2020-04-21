import React from 'react';

interface Props {
  children: React.ReactNode;
}

const TableHeader: React.FC<Props> = ({ children }) => {
  return <thead>{children}</thead>;
};

export default TableHeader;
