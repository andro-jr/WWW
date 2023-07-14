import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Widget from './Widget';
import CustomLink from '../utils/CustomLink';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import Table from './Table';
import Users from '../Users/Users';
import {
  approveBookingAPI,
  getAllBookingCount,
  getPendingBookings,
  getTotalSales,
} from '../../api/bookings';
import StatusBadge from '../utils/StatusBadge';
import ApproveButton from '../bookings/ApproveButton';
import { getAllUserCount } from '../../api/users';
import { getAllPackagesCount } from '../../api/packages';

const convertDate = (D) => {
  const day = new Date(D);
  const m = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const str_op =
    day.getDate() + ' ' + m[day.getMonth()] + ' ' + day.getFullYear();
  return str_op;
};

const Dashboard = () => {
  const [pendingBookings, setPendingBookings] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [userCount, setUserCount] = useState('');
  const [packageCount, setPackageCount] = useState('');
  const [bookingCount, setBookingCount] = useState('');
  const [totalSales, setTotalSales] = useState('');

  const approveBooking = async (id) => {
    const res = await approveBookingAPI(id);
    if (res.status === 200) {
      setBookingStatus(true);
    }
  };

  const fetchPendingBookings = async () => {
    const res = await getPendingBookings();
    setPendingBookings(res);
    setBookingStatus(res.approved);
  };

  const fetchAllUserCount = async () => {
    const res = await getAllUserCount();
    setUserCount(res);
  };
  const fetchAllPackageCount = async () => {
    const res = await getAllPackagesCount();
    setPackageCount(res);
  };
  const fetchAllBookingCount = async () => {
    const res = await getAllBookingCount();
    setBookingCount(res);
  };
  const fetchTotalSales = async () => {
    const res = await getTotalSales();
    setTotalSales(res);
  };

  useEffect(() => {
    fetchPendingBookings();
    fetchAllUserCount();
    fetchAllPackageCount();
    fetchAllBookingCount();
    fetchTotalSales();
  }, [bookingStatus]);

  return (
    <>
      <ContentsBox>
        <DashHead>Dashboard</DashHead>

        <div className='flex gap-5 mb-8'>
          <Widget
            title='Sales'
            value={totalSales}
            name='sales'
            to='/bookings'
          ></Widget>
          <Widget
            title='Total Packages'
            value={packageCount}
            name='packages'
            to='/packages'
          ></Widget>
          <Widget
            title='Total Users'
            value={userCount}
            name='users'
            to='/users'
          ></Widget>
          <Widget
            title='Total Bookings'
            value={bookingCount}
            name='bookings'
            to='/bookings'
          ></Widget>
        </div>
        <h4 className='text-bold text-black-80 mb-2 text-lg'>
          Pending Bookings
        </h4>
        <div className='table-wrap'>
          <table className='table'>
            <thead>
              <th>Id</th>
              <th>User Email</th>
              <th>User Id</th>
              <th>Package Id</th>
              <th>Package Name</th>
              <th>Total</th>
              <th>Payment Intent</th>
              <th>Departure Date</th>
              <th>Status</th>
            </thead>
            <tbody>
              {pendingBookings.length > 0 ? (
                pendingBookings.map((booking) => {
                  return (
                    <tr key={booking.id}>
                      <td>{booking.id}</td>
                      <td>{booking.useremail}</td>
                      <td>{booking.userId}</td>
                      <td>{booking.packageId}</td>
                      <td>{booking.packagename}</td>
                      <td>{`${booking.total} $`}</td>
                      <td>{booking.payment_intent}</td>
                      <td>{convertDate(booking.departureDate)}</td>
                      <td>
                        {booking.approved ? (
                          <StatusBadge status='green'>Approved</StatusBadge>
                        ) : (
                          <ApproveButton
                            onClick={() => {
                              approveBooking(booking.id);
                            }}
                          >
                            Approve
                          </ApproveButton>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9}>
                    <div className='m-auto text-center p-5 text-black-60'>
                      There are no bookings to approve
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </ContentsBox>
    </>
  );
};

export default Dashboard;
