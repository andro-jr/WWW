import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='bg-blue px-4 py-2 text-sm text-white rounded tracking-wider font-semibold'
    >
      {children}
    </Link>
  );
};

export default AddButton;
