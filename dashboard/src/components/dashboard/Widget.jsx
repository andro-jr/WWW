import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Users from '../Users/Users';

const Widget = ({ type }) => {
  const count = Users.length;
  const dataMap = {
    user: {
      title: 'USERS',
      isMoney: false,
      link: 'See all users',
      icon: (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: 'crimson',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          }}
        />
      ),
    },
    order: {
      title: 'PACKAGES',
      isMoney: false,
      link: 'View all packages',
      icon: (
        <ShoppingCartOutlinedIcon
          className="icon"
          style={{
            backgroundColor: 'rgba(218, 165, 32, 0.2)',
            color: 'goldenrod',
          }}
        />
      ),
    },
    earning: {
      title: 'EARNINGS',
      isMoney: true,
      link: 'View net earnings',
      icon: (
        <MonetizationOnOutlinedIcon
          className="icon"
          style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
        />
      ),
    },
    balance: {
      title: 'BOOKINGS',
      isMoney: true,
      link: 'See details',
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{
            backgroundColor: 'rgba(128, 0, 128, 0.2)',
            color: 'purple',
          }}
        />
      ),
    },
  };

  const widgetData = dataMap[type] || {};

  const { title, isMoney, link, icon } = widgetData;
  const amount = 15; // Temporary amount rakhya
  const diff = 20; // Temporary difference too 

  return (
    <div className="widget p-2 shadow-md rounded-md flex justify-between">
      <div className="left">
        <span className="title font-bold text-gray-500">{title}</span>
        <span className="counter text-2xl font-bold">
          {isMoney && '$'} {count} {/* Display the count */}
        </span>
        <span className="link text-sm border-b border-gray-300">{link}</span>
      </div>
      <div className="right flex items-center">
        <div
          className={`percentage ${diff > 0 ? 'positive text-green-500' : 'negative text-red-500'
            }`}
        >
          <KeyboardArrowUpIcon className="mr-1" />
          {diff} %
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
