import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import { deleteUserApi, getAllUsers } from '../../api/users';
import StatusBadge from '../utils/StatusBadge';
import EditButton from '../utils/EditButton';
import DeleteButton from '../utils/DeleteButton';
import ViewButton from '../utils/ViewButton';
import { Link, useNavigate } from 'react-router-dom';
import AddButton from '../utils/AddButton';
import { deleteSinglePackage, fetchAllPackages } from '../../api/packages';
import { approveBookingAPI, getAllBookings } from '../../api/bookings';
import ApproveButton from './ApproveButton';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [bookingStatus, setBookingStatus] = useState('');

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

  const fetchAllBookings = async () => {
    const res = await getAllBookings();
    setBookings(res);
    setBookingStatus(res.approved);
  };

  const approveBooking = async (id) => {
    const res = await approveBookingAPI(id);
    if (res.status === 200) {
      setBookingStatus(true);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, [bookingStatus]);

  console.log(bookings);

  return (
    <ContentsBox>
      <DashHead>Packages</DashHead>
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
            {bookings.length > 0 ? (
              bookings.map((booking) => {
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
                    No Bookings to display
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </ContentsBox>
  );
};

export default Bookings;
