const express = require('express');
const {
  stripePaymentApi,
  getAllBookings,
  approveBooking,
  getPendingBookings,
  getAllBookingsCount,
  getTotalSales,
} = require('../controllers/booking');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post('/create-checkout-session', stripePaymentApi);
router.get('/bookings/all', getAllBookings);
router.get('/bookings/count', getAllBookingsCount);
router.get('/bookings/sales', getTotalSales);
router.get('/bookings/pending', getPendingBookings);
router.put('/bookings/approve/:id', approveBooking);

module.exports = router;
