import React from 'react';
import { BiSolidPencil } from 'react-icons/bi';

const EditButton = () => {
  return (
    <div className='bg-black-light_gray text-black-80 inline-block p-1.5 rounded-lg cursor-pointer'>
      <BiSolidPencil />
    </div>
  );
};

export default EditButton;
