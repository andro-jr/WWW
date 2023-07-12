import React from 'react';
import { Link } from 'react-router-dom';
import Widget from './Widget';
import CustomLink from './utils/CustomLink';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-2 shadow-md rounded-md">
          <CustomLink to="/users">
            <Widget type="user" />
          </CustomLink>
        </div>

        <div className="bg-white p-2 shadow-md rounded-md">
          <Link to="/packages">
            <Widget type="order" />
          </Link>
        </div>

        <div className="bg-white p-2 shadow-md rounded-md">
          <Link to="/totalsales">
            <Widget type="earning" />
          </Link>
        </div>

        <div className="bg-white p-2 shadow-md rounded-md">
          <Link to="/bookings">
            <Widget type="balance" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
