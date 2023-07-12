import React from 'react';
import { BiTrash } from 'react-icons/bi';

const DeleteButton = () => {
  return (
    <div className='bg-black-light_gray text-black-80 inline-block p-1.5 rounded-lg cursor-pointer'>
      <BiTrash />
    </div>
  );
};

export default DeleteButton;
