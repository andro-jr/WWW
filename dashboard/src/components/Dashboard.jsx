import React from 'react';
import Users from './Users';
import Packages from './Packages';
import TotalSales from './TotalSales';
import Bookings from './Bookings';



import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-md rounded-md">
          {/* <CustomLink to="/users"> */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-md">
            Users
          </button>
          {/* </CustomLink> */}
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">
          {/* <Link to="/packages"> */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-md">
            Packages
          </button>
          {/* </Link> */}
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">
          {/* <Link to="/totalsales"> */}
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-black font-semibold py-2 px-4 rounded-md">
            Total Sales
          </button>
          {/* </Link> */}
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">
          {/* <Link to="/bookings"> */}
          <button className="w-full bg-red-500 hover:bg-red-600 text-black font-semibold py-2 px-4 rounded-md">
            Bookings
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
