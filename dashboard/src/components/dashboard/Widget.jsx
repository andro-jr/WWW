import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiSolidChevronRight, BiSolidPackage } from 'react-icons/bi';
import { HiNewspaper } from 'react-icons/hi';
import { FaUserFriends, FaHourglassStart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Widget = ({ title, value, name, to }) => {
  return (
    <Link
      to={to}
      className='flex flex-1 items-center p-4 gap-4 box-shadow bg-white rounded-xl relative'
    >
      <div>
        <div className='bg-blue-dark flex justify-center items-center p-3 rounded-full text-blue-dark bg-opacity-10 text-2xl'>
          {name === 'sales' ? (
            <GiReceiveMoney />
          ) : name === 'bookings' ? (
            <HiNewspaper />
          ) : name === 'users' ? (
            <FaUserFriends />
          ) : name === 'pending_bookings' ? (
            <FaHourglassStart />
          ) : (
            <BiSolidPackage />
          )}
        </div>
      </div>
      <div>
        <h3 className='text-2xl text-black font-semibold tracking-wide'>
          {`${value} ${name === 'sales' ? '$' : ''}`}
        </h3>
        <h5 className='text-black-80'>{title}</h5>
      </div>
      <div className='absolute top-1/2 right-5 -translate-y-1/2 text-blue-dark text-xl'>
        <BiSolidChevronRight />
      </div>
    </Link>
  );
};

export default Widget;
