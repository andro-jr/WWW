import React from 'react';

const DashHead = ({ children }) => {
  return (
    <div className='text-2xl font-semibold tracking-wider text-black mb-5'>
      {children}
    </div>
  );
};

export default DashHead;
