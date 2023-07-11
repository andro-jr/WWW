import React from 'react';

const SaveButton = ({ children, ...rest }) => {
  return (
    <button
      type='submit'
      className='bg-blue px-4 py-2 text-sm text-white rounded tracking-wider font-semibold'
    >
      {children}
    </button>
  );
};

export default SaveButton;
