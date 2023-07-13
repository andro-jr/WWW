import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Widget from './Widget';
import CustomLink from '../utils/CustomLink';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import Table from './Table';
import Users from '../Users/Users';

const Dashboard = () => {
  const userCount = Users.length;



  const bookingData = [
    {
      userName: 'Prabin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'Prabin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'Prabin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'Prabin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'Praghbin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'cbin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'abin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'Pra Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'Pbin Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },
    {
      userName: 'Pran Panta',
      travelDestination: 'Paris',
      startDate: '2023-07-15',
      paymentStatus: 'Pending',
    },

  ];


  const renderBookingRow = (booking, index) => (
    <tr key={index} className="bg-white">
      <td className="py-2">{booking.userName}</td>
      <td className="py-2">{booking.travelDestination}</td>
      <td className="py-2">{booking.startDate}</td>
      <td className="py-2">{booking.paymentStatus}</td>
    </tr>
  );

  return (
    <>
      <ContentsBox>
        <DashHead>Dashboard</DashHead>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-2 shadow-md rounded-md">
            <CustomLink to="/users">
              <Widget type="user" count={userCount} />
            </CustomLink>
          </div>
          <div className="bg-white p-2 shadow-md rounded-md">
            <Link to="/packages">
              <Widget type="order" count={20} />
            </Link>
          </div>
          <div className="bg-white p-2 shadow-md rounded-md">
            <Link to="/totalsales">
              <Widget type="earning" count={5000} />
            </Link>
          </div>
          <div className="bg-white p-2 shadow-md rounded-md">
            <Link to="/bookings">
              <Widget type="balance" count={50} />
            </Link>
          </div>
        </div>
      </ContentsBox>

      <ContentsBox>
        <DashHead>Booking Details</DashHead>
        <div>
          <Table
            headData={['User Name', 'Travel Destination', 'Start Date', 'Payment Status']}
            bodyData={bookingData}
            renderHead={(item, index) => <th key={index}>{item}</th>}
            renderBody={renderBookingRow}
            limit={5}
          />
        </div>
      </ContentsBox>
    </>
  );
};

export default Dashboard;