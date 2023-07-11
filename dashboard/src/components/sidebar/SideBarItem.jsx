import React from 'react';
import { BiSolidDashboard, BiSolidBookAlt } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { PiPackageFill } from 'react-icons/pi';
import { HiTemplate } from 'react-icons/hi';

const SideBarItem = ({ name }) => {
  return (
    <div className='flex gap-4 items-center pl-6 tracking-wider'>
      <div className='text-lg ml-2'>
        {name === 'Dashboard' ? (
          <BiSolidDashboard />
        ) : name === 'Users' ? (
          <FaUser />
        ) : name === 'Packages' ? (
          <PiPackageFill />
        ) : name === 'Bookings' ? (
          <BiSolidBookAlt />
        ) : (
          <HiTemplate />
        )}
      </div>
      {name}
    </div>
  );
};

export default SideBarItem;
