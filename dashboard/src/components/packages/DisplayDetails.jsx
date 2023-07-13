import React from 'react';

const DisplayDetails = ({ title, content }) => {
  return (
    <div className='flex gap-10 mb-3 py-3 px-5 border-l-4 border-blue bg-white-v_light rounded-xl'>
      <div className='text-base text-black-80 font-bold w-60'>{title} :</div>
      <div className='flex-1'>{content}</div>
    </div>
  );
};

export default DisplayDetails;
