import React from 'react';

const CancelButton = ({ children, ...rest }) => {
  return (
    <button
      type='button'
      {...rest}
      className='bg-black-light_gray px-4 py-2 text-sm text-black-60 rounded tracking-wider font-semibold'
    >
      {children}
    </button>
  );
};

export default CancelButton;
