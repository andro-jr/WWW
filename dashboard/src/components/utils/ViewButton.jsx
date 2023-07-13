import React from 'react';
import { FaRegEye } from 'react-icons/fa';

const ViewButton = () => {
  return (
    <div className='bg-black-light_gray text-black-80 inline-block p-1.5 rounded-lg cursor-pointer'>
      <FaRegEye />
    </div>
  );
};

export default ViewButton;
