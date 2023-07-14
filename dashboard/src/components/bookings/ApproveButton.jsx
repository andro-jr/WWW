import React from 'react';

const ApproveButton = ({ children, ...all }) => {
  return (
    <div
      {...all}
      className='bg-blue px-3 py-2 text-sm text-white rounded tracking-wider font-semibold cursor-pointer'
    >
      {children}
    </div>
  );
};

export default ApproveButton;
